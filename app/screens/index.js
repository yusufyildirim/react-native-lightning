import { Navigation } from 'react-native-navigation';

import Home from './Home';

export default function registerScreens() {
  // Screens
  Navigation.registerComponent('HomeScreen', () => Home);

  // Modal

  // Component
}
