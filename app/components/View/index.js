// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { prepareStyle } from 'utils';

function direction({ row }) {
  if (row) return 'row';
  return 'column';
}

const View = styled.View`
  ${props => prepareStyle(props)}
`;

export default View;
