import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

class MyComponent extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {};
MyComponent.defaultProps = {};

export default MyComponent;
