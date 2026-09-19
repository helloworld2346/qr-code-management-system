import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";
import { useLanguageStore } from "@/store/language.store";
import { useThemeStore } from "@/store/theme.store";

function FlagVN() {
  return (
    <svg viewBox="0 0 30 20" className="h-4 w-6 rounded-sm">
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
    <svg viewBox="0 0 30 20" className="h-4 w-6 rounded-sm">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 30,20 M30,0 0,20" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 30,20 M30,0 0,20" stroke="#c8102e" strokeWidth="1.5" />
      <rect x="12" width="6" height="20" fill="#fff" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect x="13" width="4" height="20" fill="#c8102e" />
      <rect y="8" width="30" height="4" fill="#c8102e" />
    </svg>
  );
}

export function UserMenu() {
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggle);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const changeLang = (next: "vi" | "en") => {
    setLang(next);
    i18n.changeLanguage(next);
  };

  const flagBtn = (active: boolean) =>
    `flex items-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "border-primary bg-primary bg-opacity-10 text-primary"
        : "border-border text-text opacity-70 hover:opacity-100"
    }`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center rounded-lg px-2 py-1.5 text-text transition-colors hover:bg-primary hover:bg-opacity-10"
      >
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {user?.username?.charAt(0).toUpperCase() ?? "U"}
        </span>
        <span className="mr-1 hidden text-left sm:block">
          <span className="block text-sm font-medium leading-tight">
            {user?.username ?? "User"}
          </span>
          <span className="block text-xs leading-tight opacity-60">
            {user?.role ?? ""}
          </span>
        </span>
        <FiChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
          <div className="flex items-center border-b border-border px-4 py-3">
            <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
              {user?.username?.charAt(0).toUpperCase() ?? "U"}
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight">
                {user?.username ?? "User"}
              </span>
              <span className="block text-xs leading-tight opacity-60">
                {user?.role ?? ""}
              </span>
            </span>
          </div>

          {/* Language */}
          <div className="px-4 py-3">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wide opacity-60">
              {t("language")}
            </span>
            <div className="flex">
              <button
                type="button"
                onClick={() => changeLang("vi")}
                className={`mr-2 ${flagBtn(lang === "vi")}`}
              >
                <FlagVN />
                <span className="ml-2">VI</span>
              </button>
              <button
                type="button"
                onClick={() => changeLang("en")}
                className={flagBtn(lang === "en")}
              >
                <FlagEN />
                <span className="ml-2">EN</span>
              </button>
            </div>
          </div>

          {/* Theme — switch trượt sun/moon */}
          <div className="flex items-center justify-between border-t border-border px-4 py-3">
            <span className="text-sm font-medium">{t("theme")}</span>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t("theme")}
              className={`relative h-7 w-14 rounded-full transition-colors ${
                theme === "dark" ? "bg-primary" : "bg-border"
              }`}
            >
              <span
                className={`absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary shadow transition-all ${
                  theme === "dark" ? "left-7" : "left-0.5"
                }`}
              >
                {theme === "dark" ? <FiMoon size={14} /> : <FiSun size={14} />}
              </span>
            </button>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="flex w-full items-center border-t border-border px-4 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:bg-opacity-5"
          >
            <FiLogOut className="mr-2" size={16} />
            {t("logout")}
          </button>
        </div>
      ) : null}
    </div>
  );
}
