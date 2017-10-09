import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SideMenu from './SideMenu';

// register all screens of the app (including internal ones)
export default function registerScreens(store = null, Provider = null) {
  Navigation.registerComponent('SideMenu', () => SideMenu, store, Provider);
  Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
}