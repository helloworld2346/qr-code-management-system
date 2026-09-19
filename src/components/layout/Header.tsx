import { useTranslation } from "react-i18next";
import { FiLogOut } from "react-icons/fi";

import { ThemeLanguageToggle } from "@/components/layout/ThemeLanguageToggle";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/auth.store";

export function Header() {
  const { t } = useTranslation("common");
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3 no-print">
      <span className="text-lg font-semibold text-text">{t("appTitle")}</span>
      <div className="flex items-center">
        <ThemeLanguageToggle className="mr-4" />
        {user ? (
          <span className="mr-3 text-sm text-text opacity-70">
            {user.username}
          </span>
        ) : null}
        <Button
          variant="secondary"
          onClick={logout}
          className="flex items-center rounded-full"
        >
          <FiLogOut className="mr-1" size={16} />
          {t("logout")}
        </Button>
      </div>
    </header>
  );
}
