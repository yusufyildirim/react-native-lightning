/* IMPORT CORE FEATURES */
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity } from 'components';

import styles from './styles';

class SideMenu extends Component {
  toggleDrawer() {
    this.props.navigator.toggleDrawer({ to: 'closed', side: 'left', animated: true });
  }

  goToScreen(screenName) {
    this.toggleDrawer();

    this.props.navigator.handleDeepLink({ link: screenName });
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.goToScreen('screen/MyTicketsScreen')}
        >
          <Text>SIDE MENU DEEPLINK ACTION</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default SideMenu;
