import {Navigation} from 'react-native-navigation';

import HomeScreen from './Home';
import SideMenu from './SideMenu';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('SideMenu', () => SideMenu);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
}
