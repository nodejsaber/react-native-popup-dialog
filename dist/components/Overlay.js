Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/Overlay.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var babelPluginFlowReactPropTypes_proptype_OverlayType=require('../type').babelPluginFlowReactPropTypes_proptype_OverlayType||require('prop-types').any;var BACKGROUND_COLOR='#000';var OPACITY=0.5;var ANIMATION_DURATION=2000;var SHOW_OVERLAY=false;var styles=_reactNative.StyleSheet.create({overlay:{flex:1,top:0,left:0,position:'absolute'}});var Overlay=function(_PureComponent){_inherits(Overlay,_PureComponent);function Overlay(props){_classCallCheck(this,Overlay);var _this=_possibleConstructorReturn(this,(Overlay.__proto__||Object.getPrototypeOf(Overlay)).call(this,props));_this.opacity=new _reactNative.Animated.Value(0);return _this;}_createClass(Overlay,[{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){var _props=this.props,showOverlay=_props.showOverlay,opacity=_props.opacity,animationDuration=_props.animationDuration;if(showOverlay!==prevProps.showOverlay){var toValue=showOverlay?opacity:0;_reactNative.Animated.timing(this.opacity,{toValue:toValue,duration:animationDuration,useNativeDriver:true}).start();}}},{key:'render',value:function render(){var _props2=this.props,onPress=_props2.onPress,pointerEvents=_props2.pointerEvents,backgroundColor=_props2.backgroundColor;var style={backgroundColor:backgroundColor,opacity:this.opacity,width:_reactNative.Dimensions.get('window').width,height:_reactNative.Dimensions.get('window').height};return _react2.default.createElement(_reactNative.Animated.View,{pointerEvents:pointerEvents,style:[styles.overlay,style],__source:{fileName:_jsxFileName,lineNumber:68}},_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:72}},_react2.default.createElement(_reactNative.View,{style:_reactNative.StyleSheet.absoluteFill,__source:{fileName:_jsxFileName,lineNumber:73}})));}}]);return Overlay;}(_react.PureComponent);Overlay.defaultProps={backgroundColor:BACKGROUND_COLOR,opacity:OPACITY,animationDuration:ANIMATION_DURATION,showOverlay:SHOW_OVERLAY};Overlay.propTypes=babelPluginFlowReactPropTypes_proptype_OverlayType===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_OverlayType;exports.default=Overlay;