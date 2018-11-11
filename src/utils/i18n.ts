import i18next from 'i18next';

import en from '../locales/en.json';
import ko from '../locales/ko.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const isDev: boolean = process.env.NODE_ENV === 'development';

i18next.use(LanguageDetector).init({
  lng: 'en',
  debug: isDev,
  react: { wait: true },
  interpolation: { escapeValue: false }, // not needed for react
  // lowerCaseLng: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  resources: {
    en: { translations: en },
    ko: { translations: ko }
  }
});

export default i18next;
