import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Connect with React
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
