import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import CheckBox from '../CheckBox';
import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(index, value) {
    const items = this.state.items;
    items[index].checked = !items[index].checked;

    this.props.onCheckedItemsChange(
      this.state.items.filter(item => item.checked),
    );

    this.setState({ items });
  }

  getSelectedItem() {
    return {
      index: this.state.selectedItemIndex,
      value: this.state.selectedItemValue,
    };
  }

  renderCheckBoxes() {
    const checkBoxes = this.state.items.map((item, index) => {
      return (
        <CheckBox {...item} index={index} onValueChange={this.onValueChange} />
      );
    });

    return checkBoxes;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCheckBoxes()}
      </View>
    );
  }
}

MyComponent.propTypes = {
  onCheckedItemsChange: PropTypes.func,
};
MyComponent.defaultProps = {
  onCheckedItemsChange: () => {},
};

export default MyComponent;
