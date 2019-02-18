// @flow
import React, { PureComponent } from 'react';
import { ScrollView as ReactScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import styles from './styles';

type Props = {
  keyboardAware: boolean
};

class ScrollView extends PureComponent<Props> {
  static defaultProps = {
    keyboardAware: false,
  };

  render() {
    if (this.props.keyboardAware) {
      return (
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          {...this.props}
        />
      );
    }

    return (
      <ReactScrollView showsVerticalScrollIndicator={false} {...this.props} />
    );
  }
}

export default ScrollView;

