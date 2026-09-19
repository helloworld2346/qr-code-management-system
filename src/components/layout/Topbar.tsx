import { useTranslation } from "react-i18next";
import { FiBox, FiGrid, FiMaximize } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import { useAuthStore } from "@/store/auth.store";

import { UserMenu } from "./UserMenu";

export function Topbar() {
  const { t } = useTranslation("common");
  const role = useAuthStore((s) => s.user?.role);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all ${
      isActive
        ? "text-white text-opacity-100"
        : "text-white text-opacity-70 hover:-translate-y-0.5 hover:bg-white hover:bg-opacity-10 hover:text-opacity-100"
    }`;

  const iconClass = (isActive: boolean) =>
    `mr-2 transition-colors ${
      isActive
        ? "text-white"
        : "text-white text-opacity-70 group-hover:text-opacity-100"
    }`;

  const underline = (isActive: boolean) =>
    isActive ? (
      <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-white" />
    ) : null;

  return (
    <header className="sticky top-0 z-20 border-b border-white border-opacity-10 bg-gradient-to-r from-primary to-primary-hover no-print dark:from-bg dark:to-surface">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="SƯ ĐOÀN 5"
            className="mr-3 h-14 w-14 rounded-xl"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-wide text-yellow-400">
              {t("appName")}
            </span>
            <span className="text-xs text-white text-opacity-60">
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
                {underline(isActive)}
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
                {underline(isActive)}
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
                {underline(isActive)}
              </>
            )}
          </NavLink>
          {role === "admin" ? (
            <NavLink
              to="/dashboard/units"
              className={({ isActive }) => `ml-2 ${linkClass({ isActive })}`}
            >
              {({ isActive }) => (
                <>
                  {t("units")}
                  {underline(isActive)}
                </>
              )}
            </NavLink>
          ) : null}
        </nav>

        <UserMenu />
      </div>
    </header>
  );
}
