import React, { Component } from 'react';
import { Image } from 'react-native';

import styles from './styles';

class MyComponent extends Component {
  render() {
    return (
      <Image {...this.props}>
        {this.props.children}
      </Image>
    );
  }
}

MyComponent.propTypes = {};
MyComponent.defaultProps = {};

export default MyComponent;
