import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, FlatList } from 'react-native';
import { translation, images } from 'resources';
import TouchableOpacity from '../TouchableOpacity';
import Image from '../Image';
import Text from '../Text';
import styles from './styles';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.state = {
      value: this.props.placeholder
        ? translation.t(this.props.placeholder)
        : '',
      modalVisible: false,
      selectedItem: null,
    };

    this.showModal = this.showModal.bind(this);
    this.getSelectedItem = this.getSelectedItem.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  getSelectedItem() {
    if (this.state.selectedItem) {
      return this.state.selectedItem
    }

    return null;
  }

  setSelectedItem(item) {
    this.setState({ selectedItem: item, value: item.key });
  }

  onItemChange(item) {
    this.props.onItemChange(item);
    this.setState({ selectedItem: item, modalVisible: false, value: item.key });
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onItemChange(item)}>
        <Text>{item.key}</Text>
      </TouchableOpacity>
    );
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType="fade"
      >
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContentContainerStyle}
          data={this.props.data}
          renderItem={this.renderItem}
        />
      </Modal>
    );
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={this.showModal}>
        {this.props.title
          ? <Text
            translation={this.props.title}
            style={styles.title}
            case="upper"
            fontWeight="semibold"
          />
          : null}
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {this.state.value}
          </Text>
          <Image source={images.dropdownIcon} />
        </View>
        {this.renderModal()}
      </TouchableOpacity>
    );
  }
}

MyComponent.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  onItemChange: PropTypes.func,
};
MyComponent.defaultProps = {
  onChangeText: () => {},
  placeholder: '',
  data: [],
  onItemChange: () => {},
};

export default MyComponent;
