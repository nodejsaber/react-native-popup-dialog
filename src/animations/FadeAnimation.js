/* @flow */

import { Animated } from 'react-native';
import Animation from './Animation';

type Param = {
  toValue?: number,
  animationDuration?: number,
}

export default class FadeAnimation extends Animation {
  animate: Object
  animationDuration: number

  constructor({
    toValue = 0,
    animationDuration = 200,
    useNativeDriver = false,
  }: Param) {
    super(toValue, useNativeDriver);

    this.animationDuration = animationDuration;
  }

  toValue(toValue: number) {
    Animated.timing(this.animate, {
      toValue,
      duration: this.animationDuration,
      useNativeDriver: this.useNativeDriver,
    }).start();
  }

  createAnimations(): Object {
    return { opacity: this.animate };
  }
}
