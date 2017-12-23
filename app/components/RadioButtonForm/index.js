import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import RadioButton from '../RadioButton';
import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemIndex: 0,
      selectedItemValue: '',
      items: this.props.items,
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(index, value) {
    const items = this.state.items.map(item => ({ ...item, selected: false }));
    items[index].selected = true;

    this.setState({
      items,
      selectedItemIndex: index,
      selectedItemValue: value,
    });

    if (this.state.selectedItemIndex != index) {
      this.props.onSelectedItemChange({ index, value });
    }
  }

  getSelectedItem() {
    return {
      index: this.state.selectedItemIndex,
      value: this.state.selectedItemValue,
    };
  }

  renderRadioButtons() {
    const radioButtons = this.state.items.map((item, index) => {
      return (
        <RadioButton
          {...item}
          index={index}
          onValueChange={this.onValueChange}
        />
      );
    });

    return radioButtons;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderRadioButtons()}
      </View>
    );
  }
}

MyComponent.propTypes = {
  onSelectedItemChange: PropTypes.func,
};
MyComponent.defaultProps = {
  onSelectedItemChange: () => {},
};

export default MyComponent;
