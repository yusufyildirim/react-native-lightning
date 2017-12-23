import I18n from 'react-native-i18n';
import { en, tr } from './translations';
import * as moment from 'moment';
import 'moment/locale/tr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  tr,
};

// Moment kütüphanesindeki localization işlemleri için gerekli
moment.locale(I18n.currentLocale().slice(0, 2));

export default I18n;
