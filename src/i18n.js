// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en'
import arTranslations from './translations/ar'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'ar', // fallback language if a translation is not found
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
