import i18next from 'i18next';

import en from './locales/ui/en.json';

export const langDictionary = {
  en: 'English [en]'
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
    en: { translations: en }
  }
});

export default i18next;
