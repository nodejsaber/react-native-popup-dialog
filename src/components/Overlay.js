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
const ANIMATION_DURATION: number = 2000;
const SHOW_OVERLAY: boolean = false;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});

class Overlay extends PureComponent {
  static defaultProps = {
    backgroundColor: BACKGROUND_COLOR,
    opacity: OPACITY,
    animationDuration: ANIMATION_DURATION,
    showOverlay: SHOW_OVERLAY,
  };

  constructor(props: OverlayType) {
    super(props);
    this.opacity = new Animated.Value(0);
  }


  componentDidUpdate(prevProps) {
    const { showOverlay, opacity, animationDuration } = this.props;
    if (showOverlay !== prevProps.showOverlay) {
      const toValue = showOverlay ? opacity : 0;
      Animated.timing(this.opacity, {
        toValue,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }
  }
  // componentWillReceiveProps(nextProps: OverlayType) {
  // }

  props: OverlayType

  render() {
    const { onPress, pointerEvents, backgroundColor } = this.props;
    const style = {
      backgroundColor,
      opacity: this.opacity,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    return (
      <View
        pointerEvents={pointerEvents}
      >
        <TouchableWithoutFeedback onPress={onPress}>
          <Animated.View
            style={[styles.overlay, style]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Overlay;
