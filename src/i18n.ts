import i18next from 'i18next';

import en from './locales/ui/en.json';
import ja from './locales/ui/ja.json';
import zh from './locales/ui/zh.json';

export const langDictionary = {
  en: 'English [en]',
  zh: '中文 [zh]',
  ja: '日本語 [ja]'
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
    zh: { translations: zh },
    ja: { translations: ja }
  }
});

export default i18next;
