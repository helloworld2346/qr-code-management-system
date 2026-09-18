import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/locales/en/common.json";
import viCommon from "@/locales/vi/common.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    vi: { common: viCommon },
  },
  lng: localStorage.getItem("lang") || "vi",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
