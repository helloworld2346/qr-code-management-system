import { useEffect, useRef, useState } from "react";  
import { useTranslation } from "react-i18next";  
import { FiChevronDown, FiLogOut, FiMoon, FiSun } from "react-icons/fi";  
import { useNavigate } from "react-router-dom";  
  
import { useAuthStore } from "@/store/auth.store";  
import { useLanguageStore } from "@/store/language.store";  
import { useThemeStore } from "@/store/theme.store";  
  
export function UserMenu() {  
  const { t, i18n } = useTranslation("common");  
  const navigate = useNavigate();  
  const [open, setOpen] = useState(false);  
  const ref = useRef<HTMLDivElement>(null);  
  
  const user = useAuthStore((s) => s.user);  
  const logout = useAuthStore((s) => s.logout);  
  const theme = useThemeStore((s) => s.theme);  
  const toggleTheme = useThemeStore((s) => s.toggle);  
  const lang = useLanguageStore((s) => s.lang);  
  const setLang = useLanguageStore((s) => s.setLang);  
  
  useEffect(() => {  
    const onClick = (e: MouseEvent) => {  
      if (ref.current && !ref.current.contains(e.target as Node)) {  
        setOpen(false);  
      }  
    };  
    document.addEventListener("mousedown", onClick);  
    return () => document.removeEventListener("mousedown", onClick);  
  }, []);  
  
  const changeLang = (next: "vi" | "en") => {  
    setLang(next);  
    i18n.changeLanguage(next);  
  };  
  
  const initial = user?.username?.charAt(0).toUpperCase() ?? "U";  
  const segBase =  
    "rounded px-2 py-1 text-xs font-medium transition-colors";  
  const segActive = "bg-primary text-white";  
  const segIdle = "text-text text-opacity-60 hover:text-opacity-100";  
  
  return (  
    <div className="relative" ref={ref}>  
      <button  
        type="button"  
        onClick={() => setOpen((v) => !v)}  
        className="flex items-center rounded-lg px-2 py-1.5 text-sm text-text transition-colors hover:bg-bg"  
      >  
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">  
          {initial}  
        </span>  
        <span className="mr-1 font-medium">{user?.username ?? "User"}</span>  
        <FiChevronDown size={16} className="text-text text-opacity-60" />  
      </button>  
  
      {open ? (  
        <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-border bg-surface py-2 shadow-lg">  
          <div className="border-b border-border px-4 pb-3">  
            <p className="text-sm font-semibold text-text">  
              {user?.username ?? "User"}  
            </p>  
            <p className="text-xs text-text text-opacity-60">  
              {user?.role ?? ""}  
            </p>  
          </div>  
  
          <div className="flex items-center justify-between px-4 py-3">  
            <span className="text-sm text-text">{t("language")}</span>  
            <div className="flex rounded bg-bg p-1">  
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
                className={`${segBase} ml-1 ${  
                  lang === "en" ? segActive : segIdle  
                }`}  
                aria-pressed={lang === "en"}  
              >  
                EN  
              </button>  
            </div>  
          </div>  
  
          <button  
            type="button"  
            onClick={toggleTheme}  
            className="flex w-full items-center justify-between px-4 py-3 text-sm text-text transition-colors hover:bg-bg"  
          >  
            <span className="flex items-center">  
              {theme === "dark" ? (  
                <FiSun className="mr-2" size={16} />  
              ) : (  
                <FiMoon className="mr-2" size={16} />  
              )}  
              {t("theme")}  
            </span>  
            <span className="text-xs text-text text-opacity-60">  
              {theme === "dark" ? t("light") : t("dark")}  
            </span>  
          </button>  
  
          <button  
            type="button"  
            onClick={() => {  
              logout();  
              navigate("/login");  
            }}  
            className="flex w-full items-center border-t border-border px-4 py-3 text-sm text-accent transition-colors hover:bg-bg"  
          >  
            <FiLogOut className="mr-2" size={16} />  
            {t("logout")}  
          </button>  
        </div>  
      ) : null}  
    </div>  
  );  
}