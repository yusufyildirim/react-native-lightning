import { observable } from 'mobx';

import I18n from 'react-native-i18n';

import { translationFiles } from 'resources';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;

I18n.translations = {
  en: translationFiles.en,
  tr: translationFiles.tr,
};

class TranslationsStore {
  @observable translations = {};

  /* GET TRANS */
  getTrans(ref) {
    return this.translations[ref];
  }

  changeLanguage(lang) {
    this.translations = I18n.translations[lang];
  }
}

const translationsStore = new TranslationsStore();
translationsStore.changeLanguage(I18n.defaultLocale);

export default translationsStore;
