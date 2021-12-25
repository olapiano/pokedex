import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';

i18n
  // .use(HttpApi)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'sv',
    debug: 'true',
    // detection: {
    //   order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
    //   caches: ['cookie'],
    // },
    // lng: document.querySelector('html').lang,
    // backend: {
    //   loadPath: './locales/{{lng}}/translation.json',
    // },
    interpolation: { escapeValue: false },
    // react: { useSuspense: false },
  });

export default i18n;
