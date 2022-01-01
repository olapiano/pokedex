import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './assets/locales/en/translation.json';
import translationSV from './assets/locales/sv/translation.json';
import translationES from './assets/locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sv',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
