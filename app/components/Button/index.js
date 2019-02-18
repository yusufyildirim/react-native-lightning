// @flow
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Text from './../Text';
import { colors } from 'resources';
import { prepareStyle } from 'utils';

function backgroundColor({ custom, color }) {
  if (custom) return;

  return { backgroundColor: colors[color] || colors.secondary };
}

function paddingVertical({ custom, type }) {
  if (custom) return;

  const paddingVertical = {
    NORMAL: 10,
    HUGE: 20,
  }[type] || 10;

  return { paddingVertical };
}

function paddingHorizontal({ custom, type }) {
  if (custom) return;

  const paddingHorizontal = {
    NORMAL: 10,
    HUGE: 20,
  }[type] || 10;
  return { paddingHorizontal };
}

function children({ text, textColor, children }) {
  if (!text) return children;
  return (<Text t={text} color={textColor || 'white'} />);
}

function style({ custom }) {
  if (custom) return;

  return {
    alignItems: 'center',
    justifyContent: 'center',
  };
}

const ButtonComponent = styled.TouchableOpacity
  .attrs({
    activeOpacity: 0.8,
  })`
  ${props => backgroundColor(props)}
  ${props => paddingVertical(props)}
  ${props => paddingHorizontal(props)}
  ${props => style(props)}
  ${props => prepareStyle(props)}
  borderRadius: 3
`;

const Button = (props) => {
  return (
    <ButtonComponent {...props}>
      {children(props)}
    </ButtonComponent>
  );
};

export default Button;

