import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

class MyComponent extends Component {
  render() {
    return <View style={[styles.divider, this.props.style]} />;
  }
}

MyComponent.propTypes = {
};
MyComponent.defaultProps = {
};

export default MyComponent;
