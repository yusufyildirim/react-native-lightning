import { Platform } from 'react-native';

const fonts = Platform.select({
  ios: {
    primary: {
      LIGHT: 'AppleSDGothicNeo-Light',
      REGULAR: 'AppleSDGothicNeo-Regular',
      SEMIBOLD: 'AppleSDGothicNeo-SemiBold',
      BOLD: 'AppleSDGothicNeo-Bold',
    },
  },
  android: {
    primary: {
      LIGHT: 'Arial',
      REGULAR: 'Arial',
      SEMIBOLD: 'Arial',
      BOLD: 'Arial',
    },
  },
});

export default fonts;
