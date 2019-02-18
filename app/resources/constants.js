import { Platform } from 'react-native';
import colors from './colors';

const ENV = 'DEV'; // DEV or PROD
const OS = Platform.OS;

export default {
  ENV,
  OS,
  baseServiceUrl: 'http://localhost:8080/api',
  CDN: '',
  serviceTimeout: 5000,
};
