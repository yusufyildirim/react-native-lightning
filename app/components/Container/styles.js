import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: device.width,
  },
  loadingStyle: {
    zIndex: 99999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'stretch',
    position: 'absolute',
    justifyContent: 'center',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});

module.exports = styles;
