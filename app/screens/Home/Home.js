import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react/native';
import { translations } from 'stores';
import { getCurrency } from 'services';

import { View, Image, Text } from 'react-native';
import { Container, Header } from 'components';

import { images } from 'resources';
import styles from './styles';

@observer class HomeScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    getCurrency()
      .then((response) => {
        alert(JSON.stringify(response));
      })
      .catch((response) => {
        alert(response);
      });
  }

  onNavigatorEvent(event) {
    if (this.event.type === 'DeepLink') {
      const parts = event.link.split('/');

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
      <Container>
        <Header menu title={translations.getTrans('homeTitle')} onLeftIconPress={() => this.menuAction()} />
        <View style={styles.container}>
          <Image source={images.iconLightning} />
          <Text style={styles.lightning}>Lightning!</Text>
        </View>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

module.exports = HomeScreen;
