import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from 'redux/store';
// screen related book keeping
import registerScreens from './screens';

registerScreens(store, Provider);

export default function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'HomeScreen',
      title: 'Navigation',
      navigatorStyle: {},
    },

    drawer: {
      left: {
        screen: 'SideMenu',
      },
    },
  });
}
