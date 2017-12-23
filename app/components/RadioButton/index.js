import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import styles from './styles';

class MyComponent extends Component {

  constructor() {
    super();

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onValueChange(this.props.index, this.props.value);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <View style={styles.outerCircle}>
          {this.props.selected ? <View style={styles.innerCircle} /> : null}
        </View>
        <Text style={styles.text} translation={this.props.label} />
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {
  onValueChange: PropTypes.func,
};
MyComponent.defaultProps = {
  onValueChange: () => {},
};

export default MyComponent;

