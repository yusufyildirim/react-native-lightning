// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { colors, i18n, fonts } from 'resources';

function color(color, defaultColor) {
  if (!color) return defaultColor;

  return colors[color];
}

function placeholder({ placeholder_t, placeholder }) {
  if (!placeholder_t) return placeholder;

  return i18n.t(placeholder_t);
}

const MyTextInput = styled.TextInput.attrs({
  placeholder: props => placeholder(props),
  placeholderTextColor: props => color(props.placeholderTextColor, colors.third),
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
})`
  paddingVertical: 15
  paddingHorizontal: 15
  color: ${props => color(props.textColor, colors.black)}
  borderTopColor: ${(props) => {
    if (!props.first) return 'transparent';
    return color(props.borderColor, colors.third);
  }}
  borderBottomColor: ${props => color(props.borderColor, colors.third)}
  fontFamily: ${fonts.primary.SEMIBOLD}
  borderTopWidth: 0.5
  borderBottomWidth: 0.5
`;

type Props = {
  borderColor: string,
  textColor: string,
  placeholderColor: string,
  first: boolean, // it's important for top border of the input
};

class TextInput extends PureComponent<Props> {
  static defaultProps = {};

  constructor({ value }) {
    super();
    this.state = { text: value || '' };
 
    this.setText = this.setText.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });

    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }

  getText() {
    return this.state.text;
  }

  setText(text) {
    this.setState({ text });
  }

  render() {
    return (
      <MyTextInput {...this.props} onChangeText={this.onChangeText} value={this.state.text} />
    );
  }
}

export default TextInput;

