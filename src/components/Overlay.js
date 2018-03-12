// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  View,
} from 'react-native';
import type { OverlayType } from '../type';

// default overlay options
const BACKGROUND_COLOR: string = '#000';
const OPACITY: number = 0.5;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});

class Overlay extends PureComponent {
  static props: OverlayType

  static defaultProps = {
    backgroundColor: BACKGROUND_COLOR,
    opacity: OPACITY,
    animate: undefined,
  };


  render() {
    const {
      onPress, pointerEvents, backgroundColor, animate,
    } = this.props;

    const _opacity = animate ? animate.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.opacity, 0],
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }) : 0;

    const style = {
      backgroundColor,
      opacity: _opacity,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={[styles.overlay, style]}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={StyleSheet.absoluteFill} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

export default Overlay;
