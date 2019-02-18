// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { fonts, i18n, constants, colors } from 'resources';
import { prepareStyle } from 'utils';

function color({ color }) {
  if (!color) return colors.defaultTextColor;
  console.log('COLOR: ', colors[color])
  return colors[color];
}


function fontSize({ type, size }) {
  if (!type && !size) return 14;

  // if you pass size prop, it has priority over type prop.
  if (size) return size;

  return {
    TITLE: 18,
    CAPTION: 10,
  }[type];
}

function fontWeight({ weight }) {
  if (!weight) return fonts.primary.REGULAR;

  return fonts.primary[weight] || fonts.primary.REGULAR;
}

const MyText = styled.Text`
  color: ${props => color(props)}
  fontSize: ${props => fontSize(props)}
  fontFamily: ${props => fontWeight(props)}
  ${props => prepareStyle(props)}
`;

type Props = {
  size?: number,
  weight?: 'LIGHT' | 'REGULAR' | 'SEMIBOLD' | 'BOLD',
  color?: string,
  type?: 'TITLE',
  t?: string,
  i?: Object,
}

class Text extends PureComponent<Props> {
  static defaultProps = {
    size: null,
    type: null,
    color: null,
    weight: null,
    t: null,
    i: {},
  }

  constructor() {
    super();

    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    const { t, i, children } = this.props;

    if (!t) return children;

    return i18n.t(t, i);
  }

  render() {
    return (
      <MyText {...this.props}>
        {this.renderText()}
      </MyText>
    );
  }
}

export default Text;

