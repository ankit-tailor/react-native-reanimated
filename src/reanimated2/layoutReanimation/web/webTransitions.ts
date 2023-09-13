import type { AnimatedComponentProps } from '../../../createAnimatedComponent/utils';
import {
  WEB_ANIMATIONS_ID,
  areDOMRectsEqual,
  generateRandomKeyframeName,
  handleWebAnimation,
  setElementAnimation,
} from './webAnimations';

import type { AnimationConfig } from './webAnimations';
import { LayoutAnimationType } from '..';
import { parseAnimationObjectToKeyframe } from './animationParser';

export enum TransitionType {
  LINEAR,
  SEQUENCED,
  FADING,
}

export interface TransitionData {
  translateX: number;
  translateY: number;
  scaleX: number;
  scaleY: number;
  reversed?: boolean;
}

function LinearTransition(name: string, transitionData: TransitionData) {
  const { translateX, translateY, scaleX, scaleY } = transitionData;

  const linearTransition = {
    name: name,
    style: {
      0: {
        transform: [
          {
            translateX: `${translateX}px`,
            translateY: `${translateY}px`,
            scale: `${scaleX},${scaleY}`,
          },
        ],
      },
    },
    duration: 300,
  };

  return parseAnimationObjectToKeyframe(linearTransition);
}

function SequencedTransition(name: string, transitionData: TransitionData) {
  const { translateX, translateY, scaleX, scaleY, reversed } = transitionData;

  const scaleValue = reversed ? `1, ${scaleX}` : `${scaleY}, 1`;

  // TODO: Change proportions
  const sequencedTransition = {
    name: name,
    style: {
      0: {
        transform: [
          {
            translateX: `${translateX}px`,
            translateY: `${translateY}px`,
            scale: `${scaleX}, ${scaleY}`,
          },
        ],
      },
      50: {
        transform: [
          {
            translateX: reversed ? `${translateX}px` : '0px',
            translateY: reversed ? '0px' : `${translateY}px`,
            scale: scaleValue,
          },
        ],
      },
      100: {
        transform: [{ translateX: '0px', translateY: '0px', scale: '1,1' }],
      },
    },
    duration: 300,
  };

  return parseAnimationObjectToKeyframe(sequencedTransition);
}

function FadingTransition(name: string, transitionData: TransitionData) {
  const { translateX, translateY, scaleX, scaleY } = transitionData;

  const fadingTransition = {
    name: name,
    style: {
      0: {
        opacity: 1,
        transform: [
          {
            translateX: `${translateX}px`,
            translateY: `${translateY}px`,
            scale: `${scaleX}, ${scaleY}`,
          },
        ],
      },
      20: {
        opacity: 0,
        transform: [
          {
            translateX: `${translateX}px`,
            translateY: `${translateY}px`,
            scale: `${scaleX}, ${scaleY}`,
          },
        ],
      },
      60: {
        opacity: 0,
        transform: [
          {
            translateX: '0px',
            translateY: '0px',
            scale: `1,1`,
          },
        ],
      },
      100: {
        opacity: 1,
        transform: [
          {
            translateX: '0px',
            translateY: '0px',
            scale: `1,1`,
          },
        ],
      },
    },
    duration: 300,
  };

  return parseAnimationObjectToKeyframe(fadingTransition);
}

/**
 * Creates transition of given type, appends it to stylesheet and returns keyframe name.
 *
 * @param transitionType Type of transition (e.g. LINEAR).
 * @param transitionData Object containing data for transforms (translateX, scaleX,...).
 * @returns Keyframe name that represents transition.
 */
export function TransitionGenerator(
  transitionType: TransitionType,
  transitionData: TransitionData
) {
  const keyframe = generateRandomKeyframeName();
  let transition;

  switch (transitionType) {
    case TransitionType.LINEAR:
      transition = LinearTransition(keyframe, transitionData);
      break;
    case TransitionType.SEQUENCED:
      transition = SequencedTransition(keyframe, transitionData);
      break;
    case TransitionType.FADING:
      transition = FadingTransition(keyframe, transitionData);
      break;
  }

  const styleTag = document.getElementById(
    WEB_ANIMATIONS_ID
  ) as HTMLStyleElement;

  if (styleTag.sheet) {
    styleTag.sheet.insertRule(transition);
  } else {
    console.error(
      '[Reanimated] Failed to insert layout animation into CSS stylesheet'
    );
  }

  return keyframe;
}

export function tryActivateLayoutTransition<
  ComponentProps extends Record<string, unknown>
>(
  props: Readonly<AnimatedComponentProps<ComponentProps>>,
  element: HTMLElement,
  snapshot: DOMRect
) {
  const rect = element.getBoundingClientRect();

  if (areDOMRectsEqual(rect, snapshot)) {
    return;
  }

  const transitionData: TransitionData = {
    translateX: snapshot.x - rect.x,
    translateY: snapshot.y - rect.y,
    scaleX: snapshot.width / rect.width,
    scaleY: snapshot.height / rect.height,
    reversed: false, // This field is used only in `SequencedTransition`, so by default it will be false
  };

  handleWebAnimation(
    props,
    element,
    LayoutAnimationType.LAYOUT,
    transitionData
  );
}

export function handleLayoutTransition(
  element: HTMLElement,
  animationConfig: AnimationConfig,
  transitionData: TransitionData
) {
  const { animationName } = animationConfig;

  let animationType;

  switch (animationName) {
    case 'LinearTransition':
      animationType = TransitionType.LINEAR;
      break;
    case 'SequencedTransition':
      animationType = TransitionType.SEQUENCED;
      break;
    case 'FadingTransition':
      animationType = TransitionType.FADING;
      break;
    default:
      animationType = TransitionType.LINEAR;
      break;
  }

  animationConfig.animationName = TransitionGenerator(
    animationType,
    transitionData
  );

  setElementAnimation(element, animationConfig);
}
