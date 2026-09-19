import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";

import { useLanguageStore } from "@/store/language.store";
import { useThemeStore } from "@/store/theme.store";

interface Props {
  className?: string;
}

export function ThemeLanguageToggle({ className = "" }: Props) {
  const { i18n } = useTranslation();
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggle);
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);

  const changeLang = (next: "en" | "vi") => {
    setLang(next);
    void i18n.changeLanguage(next);
  };

  const segBase =
    "px-3 py-1 text-sm font-semibold rounded-full transition-colors";
  const segActive = "bg-primary text-white shadow";
  const segIdle = "text-text opacity-60 hover:opacity-100";

  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2 flex rounded-full bg-surface p-1 shadow-inner">
        <button
          type="button"
          onClick={() => changeLang("vi")}
          className={`${segBase} ${lang === "vi" ? segActive : segIdle}`}
          aria-pressed={lang === "vi"}
        >
          VI
        </button>
        <button
          type="button"
          onClick={() => changeLang("en")}
          className={`${segBase} ml-1 ${lang === "en" ? segActive : segIdle}`}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text shadow-inner transition-colors hover:text-primary"
      >
        {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </div>
  );
}
