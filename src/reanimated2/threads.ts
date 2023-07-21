import NativeReanimatedModule from './NativeReanimated';
import { isJest, shouldBeUseWeb } from './PlatformChecker';
import type { WorkletFunction } from './commonTypes';
import {
  makeShareableCloneOnUIRecursive,
  makeShareableCloneRecursive,
} from './shareables';

const IS_JEST = isJest();
const IS_NATIVE = !shouldBeUseWeb();

/**
 * An array of [worklet, args] pairs.
 * */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _runOnUIQueue: Array<[WorkletFunction<any, unknown>, any[]]> = [];
// TODO TYPESCRIPT
// above line should be:
// let _runOnUIQueue: Array<[WorkletFunction<any[], unknown>, any[]]> = [];
// but for some reason TypeScript gives CLI error on that

export function setupMicrotasks() {
  'worklet';

  let microtasksQueue: Array<() => void> = [];
  let isExecutingMicrotasksQueue = false;
  global.queueMicrotask = (callback: () => void) => {
    microtasksQueue.push(callback);
  };

  global.__callMicrotasks = () => {
    if (isExecutingMicrotasksQueue) {
      return;
    }
    try {
      isExecutingMicrotasksQueue = true;
      for (let index = 0; index < microtasksQueue.length; index += 1) {
        // we use classic 'for' loop because the size of the currentTasks array may change while executing some of the callbacks due to queueMicrotask calls
        microtasksQueue[index]();
      }
      microtasksQueue = [];
      global._maybeFlushUIUpdatesQueue();
    } finally {
      isExecutingMicrotasksQueue = false;
    }
  };
}

function callMicrotasksOnUIThread() {
  'worklet';
  global.__callMicrotasks();
}

export const callMicrotasks = IS_NATIVE
  ? callMicrotasksOnUIThread
  : () => {
      // on web flushing is a noop as immediates are handled by the browser
    };

type runOnUIAPI = <A extends unknown[], R>(
  worklet: (...args: A) => R
) => WorkletFunction<A, R>;
/**
 * Schedule a worklet to execute on the UI runtime. This method does not schedule the work immediately but instead
 * waits for other worklets to be scheduled within the same JS loop. It uses queueMicrotask to schedule all the worklets
 * at once making sure they will run within the same frame boundaries on the UI thread.
 */
export const runOnUI = (<A extends unknown[], R>(
  worklet: WorkletFunction<A, R>
): ((...args: A) => void) => {
  'worklet';
  if (__DEV__ && IS_NATIVE && _WORKLET) {
    throw new Error(
      'runOnUI() cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.'
    );
  }
  if (__DEV__ && IS_NATIVE && worklet.__workletHash === undefined) {
    throw new Error('runOnUI() can only be used on worklets');
  }
  return (...args) => {
    if (IS_JEST) {
      // Mocking time in Jest is tricky as both requestAnimationFrame and queueMicrotask
      // callbacks run on the same queue and can be interleaved. There is no way
      // to flush particular queue in Jest and the only control over mocked timers
      // is by using jest.advanceTimersByTime() method which advances all types
      // of timers including immediate and animation callbacks. Ideally we'd like
      // to have some way here to schedule work along with React updates, but
      // that's not possible, and hence in Jest environment instead of using scheduling
      // mechanism we just schedule the work ommiting the queue. This is ok for the
      // uses that we currently have but may not be ok for future tests that we write.
      NativeReanimatedModule.scheduleOnUI(
        makeShareableCloneRecursive(() => {
          'worklet';
          worklet(...args);
        })
      );
      return;
    }
    if (__DEV__) {
      // in DEV mode we call shareable conversion here because in case the object
      // can't be converted, we will get a meaningful stack-trace as opposed to the
      // situation when conversion is only done via microtask queue. This does not
      // make the app particularily less efficient as converted objects are cached
      // and for a given worklet the conversion only happens once.
      makeShareableCloneRecursive(worklet);
      makeShareableCloneRecursive(args);
    }
    _runOnUIQueue.push([worklet, args]);
    if (_runOnUIQueue.length === 1) {
      queueMicrotask(() => {
        const queue = _runOnUIQueue;
        _runOnUIQueue = [];
        NativeReanimatedModule.scheduleOnUI(
          makeShareableCloneRecursive(() => {
            'worklet';
            queue.forEach(([worklet, args]) => {
              worklet(...args);
            });
            callMicrotasks();
          })
        );
      });
    }
  };
}) as unknown as runOnUIAPI;
// This cast is necessary (and very smart B])
// since worklet is a different object
// when you type TypeScript code and a different object
// once Reanimated Babel Plugin has transpiled it
// and runOnUI is in execution.

type runOnUIImmediatelyAPI = <A extends unknown[], R>(
  worklet: (...args: A) => R
) => WorkletFunction<A, R>;
/**
 * Schedule a worklet to execute on the UI runtime skipping batching mechanism.
 */
export const runOnUIImmediately = (<A extends unknown[], R>(
  worklet: WorkletFunction<A, R>
): ((...args: A) => void) => {
  'worklet';
  if (__DEV__ && IS_NATIVE && _WORKLET) {
    throw new Error(
      'runOnUIImmediately() cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.'
    );
  }
  if (__DEV__ && IS_NATIVE && worklet.__workletHash === undefined) {
    throw new Error('runOnUIImmediately() can only be used on worklets');
  }
  return (...args) => {
    NativeReanimatedModule.scheduleOnUI(
      makeShareableCloneRecursive(() => {
        'worklet';
        worklet(...args);
      })
    );
  };
  // This cast is necessary (and very smart B])
}) as unknown as runOnUIImmediatelyAPI;

if (__DEV__ && IS_NATIVE) {
  const f = () => {
    'worklet';
  };
  // @ts-ignore plugin
  if (f.__workletHash === undefined) {
    throw new Error(
      'Failed to create a worklet. Did you forget to add Reanimated Babel plugin in babel.config.js? See installation docs at https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#babel-plugin.'
    );
  }
}

type ReleaseRemoteFunction<A extends unknown[], R> = {
  (...args: A): R;
};

type DevRemoteFunction<A extends unknown[], R> = {
  __remoteFunction: (...args: A) => R;
};

type RemoteFunction<A extends unknown[], R> =
  | ReleaseRemoteFunction<A, R>
  | DevRemoteFunction<A, R>;

function runWorkletOnJS<A extends any[], R>(
  worklet: WorkletFunction<A, R>,
  ...args: A
): void {
  // remote function that calls a worklet synchronously on the JS runtime
  worklet(...args);
}

// runOnJS could get a plain JS function, JS function with __remoteFunction in dev
// or a worklet
/**
 * Returns a function that can be called to be executed asynchronously on both
 * UI and JS threads.
 */
export function runOnJS<A extends unknown[], R>(
  fun: ((...args: A) => R) | RemoteFunction<A, R> | WorkletFunction<A, R>
): (...args: A) => void {
  'worklet';
  if ('__workletHash' in fun) {
    // if `fun` is a worklet, we schedule a call of a remote function `runWorkletOnJS`
    // and pass the worklet as a first argument followed by original arguments
    // Weirdly TypeScript cannot infer that fun is `WorkletFunction<A, R>` here so I had to cast
    return (...args) =>
      runOnJS(runWorkletOnJS<A, R>)(fun as WorkletFunction<A, R>, ...args);
  }
  if ('__remoteFunction' in fun) {
    // In development mode the function provided as `fun` throws an error message
    // such that when someone accidently calls it directly on the UI runtime, they
    // see that they should use `runOnJS` instead. To facilitate that we put the
    // reference to the original remote function in the `__functionInDEV` property
    // but only in DEV.
    fun = fun.__remoteFunction;
  }
  return (...args) => {
    _scheduleOnJS(
      // TypeScript cannot infer that now fun cannot have __remoteFunction property
      // TODO TYPESCRIPT cast for any will be removed when _scheduleOnJS is properly typed
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fun as unknown as RemoteFunction<A, R> as any,
      args.length > 0
        ? // TODO TYPESCRIPT this cast is terrible but will be fixed
          (makeShareableCloneOnUIRecursive(args) as unknown as unknown[])
        : undefined
    );
  };
}
