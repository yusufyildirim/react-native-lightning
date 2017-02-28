import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import globals from 'stores/GlobalsStore';
import t from 'stores/TranslationsStore'
import {getCurrency} from 'services'

import {View, Image, Text} from 'react-native';
import {Container, Header} from 'components'

import { iconLightning } from 'resources/images'
import colors from 'resources/colors'
import styles from './styles'

@observer
class HomeScreen extends Component {

  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props)

    this
      .props
      .navigator
      .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'DeepLink') {
      
      const parts = event
        .link
        .split('/');

      if (parts[0] == 'screen') {

        alert(parts[1]);

        // You can push to screens like that
        /*this
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
    this
      .props
      .navigator
      .toggleDrawer({
        side: 'left',
        animated: true
      });
  }

  componentDidMount() {
    getCurrency()
    .then((response)=>{
      alert(JSON.stringify(response));
    })
    .catch((response)=>{
      alert(response);
    })
  }
  

  render() {

    return (
      <Container>
        <Header menu title={t.getTrans('homeTitle')} onLeftIconPress={() => this.menuAction()}/>
          <View style={styles.container}>
            <Image source={iconLightning} />
            <Text style={styles.lightning}>Lightning!</Text>
          </View>
      </Container> 
    );
  }

}

module.exports = HomeScreen
