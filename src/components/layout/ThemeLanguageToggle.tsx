import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";

import { useLanguageStore } from "@/store/language.store";
import { useThemeStore } from "@/store/theme.store";

interface Props {
  className?: string;
}

function FlagVN() {
  return (
    <svg viewBox="0 0 30 20" className="h-5 w-7 rounded-sm">
      <rect width="30" height="20" fill="#da251d" />
      <polygon
        points="15,5 16.18,8.38 19.76,8.45 16.9,10.62 17.94,14.05 15,12 12.06,14.05 13.1,10.62 10.24,8.45 13.82,8.38"
        fill="#ff0"
      />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 30 20" className="h-5 w-7 rounded-sm">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#c8102e" strokeWidth="1.5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#c8102e" strokeWidth="3" />
    </svg>
  );
}

export function ThemeLanguageToggle({ className = "" }: Props) {
  const { i18n } = useTranslation();
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggle);
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);

  const toggleLang = () => {
    const next = lang === "vi" ? "en" : "vi";
    setLang(next);
    void i18n.changeLanguage(next);
  };

  return (
    <div
      className={`flex items-center rounded-full border border-white border-opacity-20 bg-white bg-opacity-10 p-1 backdrop-blur ${className}`}
    >
      <button
        type="button"
        onClick={toggleLang}
        aria-label="Toggle language"
        className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110"
      >
        {lang === "vi" ? <FlagVN /> : <FlagEN />}
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:text-opacity-70"
      >
        {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </div>
  );
}
