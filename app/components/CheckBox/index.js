import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import styles from './styles';

class MyComponent extends Component {

  onPress() {
    this.props.onValueChange(this.props.index, this.props.value);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.outer}>
          {this.props.checked ? <View style={styles.inner} /> : null}
        </View>
        <Text style={styles.text} translation={this.props.label} />
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {
  onValueChange: PropTypes.func,
  onPress: PropTypes.func,
};
MyComponent.defaultProps = {
  onValueChange: () => {},
  onPress: () => {},
};

export default MyComponent;
