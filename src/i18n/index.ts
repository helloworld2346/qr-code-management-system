import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enAssets from "@/locales/en/assets.json";
import enAuth from "@/locales/en/auth.json";
import enCommon from "@/locales/en/common.json";
import enScanner from "@/locales/en/scanner.json";
import viAssets from "@/locales/vi/assets.json";
import viAuth from "@/locales/vi/auth.json";
import viCommon from "@/locales/vi/common.json";
import viScanner from "@/locales/vi/scanner.json";

// eslint-disable-next-line import/no-named-as-default-member
void i18next.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      auth: enAuth,
      assets: enAssets,
      scanner: enScanner,
    },
    vi: {
      common: viCommon,
      auth: viAuth,
      assets: viAssets,
      scanner: viScanner,
    },
  },
  lng: localStorage.getItem("lang") || "vi",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export { i18next as i18n };
