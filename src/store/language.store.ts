import { create } from "zustand";

type Lang = "en" | "vi";

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: (localStorage.getItem("lang") as Lang) || "vi",
  setLang: (lang) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  },
}));
