import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';
import styles from './styles';

class MyComponent extends Component {
  constructor() {
    super();

    this.renderButtons = this.renderButtons.bind(this);
  }

  renderButtons() {
    return this.props.buttons.map((item, key) => (
      <Button
        key={key}
        type="thin"
        style={styles.button}
        color={item.color}
        textColor={item.textColor}
        translation={item.translation}
        onPress={item.onPress}
      />
      ));
  }

  render() {
    return (
      <Modal visible={this.props.visible} animationType="fade" transparent>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            {this.props.children}
            <View style={styles.buttonContainer}>
              {this.renderButtons()}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

MyComponent.propTypes = {
  buttons: PropTypes.array,
  onPress: PropTypes.func,
};
MyComponent.defaultProps = {
  buttons: [],
  onPress: () => {},
};

export default MyComponent;
