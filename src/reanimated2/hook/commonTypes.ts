import type { Component } from 'react';
import type { ShadowNodeWrapper } from '../commonTypes';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type DependencyList = Array<unknown> | undefined;

export interface Descriptor {
  tag: number;
  name: string;
  shadowNodeWrapper: ShadowNodeWrapper;
}

export interface AnimatedRef<T extends Component> {
  current: T | null;
  (component?: T):
    | number // Paper
    | ShadowNodeWrapper // Fabric
    | HTMLElement; // web
}

export type NativeEvent<Payload extends object> = Payload;

export type WrappedNativeEvent<Payload extends object> = {
  nativeEvent: Payload;
};

export type DefaultStyle = ViewStyle | ImageStyle | TextStyle;
