import React, { Component, PropTypes } from 'react';

import { View } from 'react-native';
import { Header, Image, Text } from 'components';

import { connect } from 'react-redux';

import { images } from 'resources';
import styles from './styles';

class HomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }


  onNavigatorEvent(event) {
    this.event = event;

    if (this.event.type === 'DeepLink') {
      const parts = this.event.link.split('/');

      if (parts[0] === 'screen') {
        alert(parts[1]);

        // You can push screens like that
        /* this
          .props
          .navigator
          .push({
            screen: parts[1]
          });*/
      }
    }
  }

  menuAction() {
    /* OPEN DRAWER */
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title="homeTitle"
          leftButtonIcon="iconMenu"
          rightButtonIcon="search"
          rightButtonText="homeTitle"
          onRightButtonPress={() => {
              alert('YAY');
          }}
          onLeftButtonPress={() => this.menuAction()}
        />
        <View style={styles.container}>
          <Image source={images.iconLightning} />
          <Text style={styles.lightning}>Lightning!</Text>
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {};
HomeScreen.defaultProps = {};

const mapStateToProps = state => ({
  reduxText: state.exampleDuck.reduxText,
});

export default connect(mapStateToProps)(HomeScreen);
