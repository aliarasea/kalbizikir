import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./localization/tr/translations.json";
import en from "./localization/en/translations.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
    },
    lng: "tr-TR",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });
