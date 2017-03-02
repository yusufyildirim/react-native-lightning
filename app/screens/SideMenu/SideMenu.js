/* IMPORT CORE FEATURES */
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { observer } from 'mobx-react/native';
import { Container } from 'components';
import styles from './styles';

@observer
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
      <Container style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.goToScreen('screen/MyTicketsScreen')}
        >
          <Text>SIDE MENU DEEPLINK ACTION</Text>
        </TouchableOpacity>

      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default SideMenu;
