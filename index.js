import { Navigation } from 'react-native-navigation';
import registerScreens from 'screens';
import { images } from 'resources';

registerScreens();

export function startFromHome() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'HomeScreen',
          },
        }],
        options: {
        },
      },
    },
  });
}

Navigation.events().registerAppLaunchedListener(async () => {
  // Default options for all screens
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      backButton: {
        color: 'black',
        showTitle: false
      },
      hideBackButtonTitle: true,
      backButtonImage: images.example,
    },
  });

  startFromHome();
});
