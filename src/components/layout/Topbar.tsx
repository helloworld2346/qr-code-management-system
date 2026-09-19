import { useTranslation } from "react-i18next";
import { FiBox, FiGrid, FiMaximize } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import { useAuthStore } from "@/store/auth.store";

import { UserMenu } from "./UserMenu";

export function Topbar() {
  const { t } = useTranslation("common");
  const role = useAuthStore((s) => s.user?.role);

  // Hover kiểu mới: chip nền mềm, icon đổi màu primary, nhích nhẹ lên
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all ${
      isActive
        ? "bg-primary bg-opacity-10 text-primary"
        : "text-text opacity-70 hover:-translate-y-0.5 hover:bg-text hover:bg-opacity-5 hover:opacity-100"
    }`;

  const iconClass = (isActive: boolean) =>
    `mr-2 transition-colors ${
      isActive ? "text-primary" : "text-text group-hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface no-print">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logo} alt="BCA" className="mr-3 h-12 w-12 rounded-xl" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-wide text-text">
              {t("appName")}
            </span>
            <span className="text-xs text-text opacity-60">
              {t("appSubtitle")}
            </span>
          </div>
        </div>

        <nav className="flex items-center">
          <NavLink to="/dashboard" end className={linkClass}>
            {({ isActive }) => (
              <>
                <FiGrid className={iconClass(isActive)} size={16} />
                {t("dashboard")}
              </>
            )}
          </NavLink>
          <NavLink
            to="/dashboard/assets"
            className={({ isActive }) => `ml-2 ${linkClass({ isActive })}`}
          >
            {({ isActive }) => (
              <>
                <FiBox className={iconClass(isActive)} size={16} />
                {t("assets")}
              </>
            )}
          </NavLink>
          <NavLink
            to="/dashboard/scanner"
            className={({ isActive }) => `ml-2 ${linkClass({ isActive })}`}
          >
            {({ isActive }) => (
              <>
                <FiMaximize className={iconClass(isActive)} size={16} />
                {t("scanner")}
              </>
            )}
          </NavLink>
          {role === "admin" ? (
            <NavLink
              to="/dashboard/units"
              className={({ isActive }) => `ml-2 ${linkClass({ isActive })}`}
            >
              {t("units")}
            </NavLink>
          ) : null}
        </nav>

        <UserMenu />
      </div>
    </header>
  );
}
