/* IMPORT CORE FEATURES */
import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';

import { observer } from 'mobx-react/native';
import t from 'stores/TranslationsStore';
import {Container} from 'components';
import globals from 'stores/GlobalsStore';
import styles from './styles';

@observer
export default class SideMenu extends Component {

  toggleDrawer() {
    this
      .props
      .navigator
      .toggleDrawer({ to: 'closed', side: 'left', animated: true });
  }

  goToScreen(screenName) {
    this.toggleDrawer();

    this
      .props
      .navigator
      .handleDeepLink({ link: screenName });
  }

  render() {
    return (
      <Container style={styles.container}>
        
        <TouchableOpacity style={styles.button} onPress={() => this.goToScreen('screen/MyTicketsScreen')}>
          <Text>SIDE MENU DEEPLINK ACTION</Text>
        </TouchableOpacity>

      </Container>
    );
  }
}
