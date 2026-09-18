import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/locales/en/common.json";
import viCommon from "@/locales/vi/common.json";

// eslint-disable-next-line import/no-named-as-default-member  
void i18next.use(initReactI18next).init({  resources: { en: { common: enCommon }, vi: { common: viCommon } },
  lng: localStorage.getItem("lang") || "vi",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export { i18next as i18n };
