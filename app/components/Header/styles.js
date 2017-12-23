import { StyleSheet, Platform } from 'react-native';
import { colors } from 'resources';

const headerHeight = Platform.OS === 'ios' ? 76 : 56; // Header yüksekliği iOS ise 76 değilse 56

const styles = {
  container: {
    backgroundColor: colors.primary,
    height: headerHeight,
    justifyContent: 'flex-end',
  },
  contentArea: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  left: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 56,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
};

export default styles;
