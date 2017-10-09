import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from '../Text';
import Image from '../Image';
import TouchableOpacity from '../TouchableOpacity';
import { images } from 'resources';
import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.style = {
      left: {
        textStyle: {},
      },
      right: {
        textStyle: {},
      },
    };

    this.renderCenter = this.renderCenter.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderLeft() {
    if (this.props.showLeftIcon) {
      return (
        <TouchableOpacity style={styles.left}>
          <Image source={this.props.leftIcon} />
        </TouchableOpacity>
      );
    }

    return <View />;
  }

  renderCenter() {
    return (
      <View style={styles.center}>
        <Text style={styles.title} translation={this.props.title} type="TITLE" color="white" />
      </View>
    );
  }

  renderButton(position, icon, text, onPress) {
    // 24 48 72px images

    if (icon && text) {
      this.style[position].textStyle = { marginTop: 5 };
    }

    /* PRESS EVENT */

    /* ******* */

    if (icon || text) {
      return (
        <TouchableOpacity style={styles.right} onPress={onPress}>
          {icon ? <Image source={images[icon]} /> : <View />}

          {text
            ? <Text translation={text} color="white" style={this.style[position].textStyle} />
            : <View />}
        </TouchableOpacity>
      );
    }

    return <View />;
  }

  render() {
    return (
      <View style={styles.container} {...this.props}>
        <View style={styles.contentArea}>
          {this.renderCenter()}
          {this.renderButton(
            'left',
            this.props.leftButtonIcon,
            this.props.leftButtonText,
            this.props.onLeftButtonPress,
          )}
          {this.renderButton(
            'right',
            this.props.rightButtonIcon,
            this.props.rightButtonText,
            this.props.onRightButtonPress,
          )}
        </View>
      </View>
    );
  }
}

MyComponent.propTypes = {
  title: PropTypes.string,
  leftButtonIcon: PropTypes.string,
  leftButtonText: PropTypes.string,
  rightButtonIcon: PropTypes.string,
  rightButtonText: PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  onRightButtonPress: PropTypes.func,
};

MyComponent.defaultProps = {
  title: '',
  showLeftIcon: true,
  leftButtonIcon: null,
  leftButtonText: null,
  rightButtonIcon: null,
  rightButtonText: null,
  onLeftButtonPress: () => {},
  onRightButtonPress: () => {},
};

export default MyComponent;
