import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from './en/common.json';
import commonUr from './ur/common.json';
import moviesEn from './en/movies.json';
import moviesUr from './ur/movies.json';

i18next
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
    },
    resources: {
      en: {
        common: commonEn,
        movies: moviesEn,
      },
      ur: {
        common: commonUr,
        movies: moviesUr,
      },
    },
    react: { useSuspense: false },
  });

export default i18next;
