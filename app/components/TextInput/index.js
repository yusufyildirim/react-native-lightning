import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { translation } from 'resources';
import Text from '../Text';
import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { text : '' };
    this.placeholder = this.props.placeholder ? translation.t(this.props.placeholder) : '';

    this.onChangeText = this.onChangeText.bind(this);
    this.getText = this.getText.bind(this);
  }
  onChangeText(text) {
    this.setState({ text })
    this.props.onChangeText(text);
  }

  getText() {
    return this.state.text;
  }

  setText(text) {
    this.setState({ text })
  }

  focus() {
    this.textInput.focus();
  }

  clear() {
    this.text = '';
    this.props.onChangeText(this.text);
    this.textInput.clear();
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        {this.props.title
          ? <Text
            translation={this.props.title}
            style={styles.title}
            case="upper"
            fontWeight="semibold"
          />
          : null}
        <TextInput
          {...this.props}
          value={this.state.text}
          placeholder={this.placeholder}
          onChangeText={this.onChangeText}
          style={[styles.input, this.props.style]}
          underlineColorAndroid="transparent"
          ref={(inputRef) => {
            this.textInput = inputRef;
          }}
        />
      </View>
    );
  }
}

MyComponent.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};
MyComponent.defaultProps = {
  onChangeText: () => {},
  placeholder: '',
};

export default MyComponent;
