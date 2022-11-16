/* global _WORKLET _measure _scrollTo _dispatchCommand _setGestureState */
import { Component } from 'react';
import { findNodeHandle } from 'react-native';
import { MeasuredDimensions } from './commonTypes';
import { RefObjectFunction } from './hook/commonTypes';
import { isChromeDebugger, isWeb, shouldBeUseWeb } from './PlatformChecker';

export function getTag(
  view: null | number | React.Component<any, any> | React.ComponentClass<any>
): null | number {
  return findNodeHandle(view);
}

const isNative = !shouldBeUseWeb();

export let measure: <T extends Component>(
  animatedRef: RefObjectFunction<T>
) => MeasuredDimensions | null;

if (isWeb()) {
  measure = <T extends Component>(animatedRef: RefObjectFunction<T>) => {
    const element = animatedRef() as unknown as HTMLElement; // TODO: fix typing of animated refs on web
    const viewportOffset = element.getBoundingClientRect();
    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
      x: element.offsetLeft,
      y: element.offsetTop,
      pageX: viewportOffset.left,
      pageY: viewportOffset.top,
    };
  };
} else if (isChromeDebugger()) {
  measure = <T extends Component>(_animatedRef: RefObjectFunction<T>) => {
    console.warn('[Reanimated] measure() cannot be used with Chrome Debugger.');
    return null;
  };
} else {
  measure = <T extends Component>(animatedRef: RefObjectFunction<T>) => {
    'worklet';
    if (!_WORKLET) {
      console.warn(
        '[Reanimated] measure() was called from the main JS context. Measure is ' +
          'only available in the UI runtime. This may also happen if measure() ' +
          'was called by a worklet in the useAnimatedStyle hook, because useAnimatedStyle ' +
          'calls the given worklet on the JS runtime during render. If you want to ' +
          'prevent this warning then wrap the call with `if (_WORKLET)`. Then it will ' +
          'only be called on the UI runtime after the render has been completed.'
      );
      return null;
    }

    const viewTag = animatedRef();
    if (viewTag === -1) {
      console.warn(
        `[Reanimated] The view with tag ${viewTag} is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`
      );
      return null;
    }

    const measured = _measure(viewTag);
    if (measured === null) {
      console.warn(
        `[Reanimated] The view with tag ${viewTag} has some undefined, not-yet-computed or meaningless value of \`LayoutMetrics\` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`
      );
      return null;
    } else if (measured.x === -1234567) {
      console.warn(
        `[Reanimated] The view with tag ${viewTag} returned an invalid measurement response.`
      );
      return null;
    } else if (isNaN(measured.x)) {
      console.warn(
        `[Reanimated] The view with tag ${viewTag} gets view-flattened on Android. To disable view-flattening, set \`collapsable={false}\` on this component.`
      );
      return null;
    } else {
      return measured;
    }
  };
}

export function dispatchCommand<T extends Component>(
  animatedRef: RefObjectFunction<T>,
  commandName: string,
  args: Array<unknown>
): void {
  'worklet';
  if (!_WORKLET || !isNative) {
    return;
  }
  const shadowNodeWrapper = animatedRef();
  _dispatchCommand(shadowNodeWrapper, commandName, args);
}

export let scrollTo: <T extends Component>(
  animatedRef: RefObjectFunction<T>,
  x: number,
  y: number,
  animated: boolean
) => void;

if (isWeb()) {
  scrollTo = <T extends Component>(
    animatedRef: RefObjectFunction<T>,
    x: number,
    y: number,
    animated: boolean
  ) => {
    'worklet';
    const element = animatedRef() as unknown as HTMLElement;
    // @ts-ignore same call as in react-native-web
    element.scrollTo({ x, y, animated });
  };
} else if (isNative && global._IS_FABRIC) {
  scrollTo = <T extends Component>(
    animatedRef: RefObjectFunction<T>,
    x: number,
    y: number,
    animated: boolean
  ) => {
    'worklet';
    dispatchCommand(animatedRef, 'scrollTo', [x, y, animated]);
  };
} else if (isNative) {
  scrollTo = <T extends Component>(
    animatedRef: RefObjectFunction<T>,
    x: number,
    y: number,
    animated: boolean
  ) => {
    'worklet';
    if (!_WORKLET) {
      return;
    }
    const viewTag = animatedRef();
    _scrollTo(viewTag, x, y, animated);
  };
} else {
  scrollTo = <T extends Component>(
    _animatedRef: RefObjectFunction<T>,
    _x: number,
    _y: number
  ) => {
    // no-op
  };
}

export function setGestureState(handlerTag: number, newState: number): void {
  'worklet';
  if (!_WORKLET || !isNative) {
    console.warn(
      '[Reanimated] You can not use setGestureState in non-worklet function.'
    );
    return;
  }
  _setGestureState(handlerTag, newState);
}
