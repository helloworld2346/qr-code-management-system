import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { useLanguageStore } from "@/store/language.store";
import { useThemeStore } from "@/store/theme.store";

export function Header() {
  const { i18n } = useTranslation();
  const toggleTheme = useThemeStore((s) => s.toggle);
  const setLang = useLanguageStore((s) => s.setLang);

  const changeLang = (lang: "en" | "vi") => {
    setLang(lang);
    void i18n.changeLanguage(lang);
  };

  return (
    <header className="flex items-center justify-between bg-surface px-4 py-2 no-print">
      <span className="font-semibold text-text">QR Asset</span>
      <div>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => changeLang("vi")}
        >
          VI
        </Button>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => changeLang("en")}
        >
          EN
        </Button>
        <Button variant="secondary" onClick={toggleTheme}>
          Theme
        </Button>
      </div>
    </header>
  );
}
