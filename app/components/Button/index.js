import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from 'resources';
import PropTypes from 'prop-types';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';

import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.inlineStyle = {};
    this.fontSize = 16;

    if (this.props.type === 'thin') {
      this.inlineStyle = styles.thinContainer;
      this.fontSize = 14;
    }
  }
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[
          styles.container,
          this.inlineStyle,
          { backgroundColor: colors[this.props.color] },
          this.props.style,
        ]}
      >
        <Text
          translation={this.props.translation}
          color={this.props.textColor}
          fontSize={this.fontSize}
        />
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'thin']),
};
MyComponent.defaultProps = {
  color: '',
  textColor: '',
  type: 'normal',
};

export default MyComponent;
