import i18next from 'i18next';

import english from '../locales/en.json';
import korean from '../locales/ko.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const isDev: boolean = process.env.NODE_ENV === 'development';

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  debug: isDev,
  react: { wait: true },
  interpolation: { escapeValue: false }, // not needed for react

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  resources: {
    en: { translations: english },
    ko: { translations: korean }
  }
});

export default i18next;
