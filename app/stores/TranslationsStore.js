import {observable, autorun, action, computed} from 'mobx'

import I18n from 'react-native-i18n'

import en from 'resources/translations/en'
import tr from 'resources/translations/tr'

I18n.defaultLocale = "en";
I18n.fallbacks = true

I18n.translations = {
    en,
    tr,
}

class TranslationsStore {
    @observable translations = {}

    /* GET TRANS */
    getTrans(ref) {
        return this.translations[ref];
    }

    changeLanguage(lang) {
        this.translations = I18n.translations[lang]
    }
}

const translationsStore = new TranslationsStore()
translationsStore.changeLanguage(I18n.defaultLocale)

export default translationsStore;
