import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './screens';

registerScreens();

export default function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'HomeScreen',
      title: 'Navigation',
      navigatorStyle: {},
    },

    drawer: {
        left: {
            screen: 'SideMenu'
        }
    },
  });
}
