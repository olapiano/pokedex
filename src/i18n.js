import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './assets/locales/en/translation.json';
import translationSV from './assets/locales/sv/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sv',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
