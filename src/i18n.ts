import i18next from 'i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import zh from './locales/zh.json';

export const langDictionary = {
  en: 'English [en]',
  es: 'Español [es]',
  ja: '日本語 [ja]',
  ko: '한국어 [ko]',
  zh: '中文 [zh]'
};

const isDev: boolean = process.env.NODE_ENV === 'development';

i18next.init({
  lng: 'en',
  debug: isDev,
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
  interpolation: { escapeValue: false }, // not needed for react
  // lowerCaseLng: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  resources: {
    en: { translations: en },
    es: { translations: es },
    ja: { translations: ja },
    ko: { translations: ko },
    zh: { translations: zh }
  }
});

export default i18next;
