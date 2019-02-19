// @flow

import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';
import { constants } from 'resources';
import styles from './styles';

function source({ cdn, uri, source }) {
  if (source) return source;

  if (!uri) return {};
  if (cdn) return { uri: constants.CDN + uri };

  return { uri };
}

const MyImage = styled(FastImage).attrs(props => ({
  source: source(props),
}))``;

type Props = {
  uri: string,
  cdn: boolean,
  placeholder: any
};

class Image extends PureComponent<Props> {
  static defaultProps = {
    uri: null,
    cdn: false,
    placeholder: null,
  }

  render() {
    return (
      <MyImage {...this.props} />
    );
  }
}

export default Image;

