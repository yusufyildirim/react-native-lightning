import { observable } from 'mobx';
import { AsyncStorage } from 'react-native';
import translations from './TranslationsStore';

class GlobalsStore {
  @observable token = '';
  @observable isLoggedIn = false;
  @observable language = 'en';
  @observable serviceDefaultParams = {
    lang: this.language,
    token: this.token,
  };

  setToken(token) {
    AsyncStorage.setItem('token', token);
    this.token = token;
    this.serviceDefaultParams.token = token;

    this.isLoggedIn = !!token;
  }

  getToken() {
    return this.token;
  }

  changeLoginStatus(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  setLanguage(language) {
    this.language = language;
    translations.changeLanguage(language);

    this.serviceDefaultParams.lang = language;
  }
}

const globalsStore = new GlobalsStore();

/* Check Storage */
AsyncStorage.getItem('token').then((token) => {
  if (token != null) {
    globalsStore.setToken(token);
  }
});

AsyncStorage.getItem('lang').then((language) => {
  if (language != null) {
    globalsStore.setLanguage(language);
  }
});

export default globalsStore;
