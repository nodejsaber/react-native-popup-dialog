// @flow

import React, { Component } from 'react';
import { StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
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

class Overlay extends Component {
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

  componentWillReceiveProps(nextProps: OverlayType) {
    if (this.props.showOverlay !== nextProps.showOverlay) {
      const toValue = nextProps.showOverlay ? nextProps.opacity : 0;
      Animated.timing(this.opacity, {
        toValue,
        duration: this.props.animationDuration,
        useNativeDriver: true,
      }).start();
    }
  }

  props: OverlayType

  render() {
    const { onPress, pointerEvents } = this.props;
    const style = {
      backgroundColor: this.props.backgroundColor,
      opacity: this.opacity,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          pointerEvents={pointerEvents}
          style={[styles.overlay, style]}
        >
          {/* <TouchableOpacity  style={[styles.overlay, style]} /> */}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Overlay;
