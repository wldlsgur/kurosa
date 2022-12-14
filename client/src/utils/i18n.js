import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { kor, jp } from "./Language";

const resource = {
  kr: {
    translation: kor,
  },
  jp: {
    translation: jp,
  },
};
i18n.use(initReactI18next).init({
  resources: resource,
  lng: "kr",
  fallbackLng: "kr",
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
