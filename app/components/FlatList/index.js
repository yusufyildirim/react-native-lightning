// @flow
import React, { PureComponent } from 'react';
import { FlatList as ReactFlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import View from '../View';
import styles from './styles';

function renderFooter({ loading, ListFooterComponent }) {
  if (loading) {
    return (
      <View>
        {ListFooterComponent ? ListFooterComponent() : null}
        <ActivityIndicator style={{ marginVertical: 10 }} />
      </View>
    );
  }

  return ListFooterComponent ? ListFooterComponent() : null;
}

function renderEmptyComponent(props) {
  if (!props.emptyState) return null;

  return (
    null
  );
}

const FlatList = styled(ReactFlatList).attrs(() => ({
  showsVerticalScrollIndicator: false,
  ListFooterComponent: renderFooter,
  onEndReachedThreshold: 0.3,
  ListEmptyComponent: renderEmptyComponent,
}))``;

type Props = {

}
export default class MyFlatList extends PureComponent<Props> {
  constructor() {
    super();
    this.onEndReachedCalledDuringMomentum = true;

    this.onMomentumScrollBegin = this.onMomentumScrollBegin.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
  }

  onMomentumScrollBegin() {
    this.onEndReachedCalledDuringMomentum = false;

    if (this.props.onMomentumScrollBegin) {
      this.props.onMomentumScrollBegin();
    }
  }

  onEndReached() {
    /*
    * React Native's flatlist triggers onEndReached event multiple time in normal conditions
    * This code piece prevents those unnecessary events
    */
    if (!this.onEndReachedCalledDuringMomentum && this.props.onEndReached) {
      this.props.onEndReached();
      this.onEndReachedCalledDuringMomentum = true;
    }
  }

  render() {
    return (
      <FlatList
        keyboardShouldPersistTaps="handled"
        {...this.props}
        onMomentumScrollBegin={this.onMomentumScrollBegin}
        onEndReached={this.onEndReached}
      />
    );
  }
}

