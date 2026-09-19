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
    `relative flex items-center px-1 py-4 text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-text opacity-60 hover:opacity-100"
    }`;

  const dot = (isActive: boolean) =>
    isActive ? (
      <span className="absolute bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
    ) : null;

  return (
    <header className="sticky top-0 z-20 border-b border-black border-opacity-5 bg-surface no-print">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logo} alt="BCA" className="mr-2 h-9 w-9 rounded-lg" />
          <span className="text-base font-bold tracking-wide text-text">
            {t("appName")}
          </span>
        </div>

        <nav className="flex items-center">
          <NavLink to="/dashboard" end className={linkClass}>
            {({ isActive }) => (
              <>
                <FiGrid className="mr-2" size={16} />
                {t("dashboard")}
                {dot(isActive)}
              </>
            )}
          </NavLink>
          <NavLink to="/dashboard/assets" className={linkClass}>
            {({ isActive }) => (
              <span className="ml-6 flex items-center">
                <FiBox className="mr-2" size={16} />
                {t("assets")}
                {dot(isActive)}
              </span>
            )}
          </NavLink>
          <NavLink to="/dashboard/scanner" className={linkClass}>
            {({ isActive }) => (
              <span className="ml-6 flex items-center">
                <FiMaximize className="mr-2" size={16} />
                {t("scanner")}
                {dot(isActive)}
              </span>
            )}
          </NavLink>
          {role === "admin" ? (
            <NavLink to="/dashboard/units" className={linkClass}>
              {({ isActive }) => (
                <span className="ml-6 flex items-center">
                  {t("units")}
                  {dot(isActive)}
                </span>
              )}
            </NavLink>
          ) : null}
        </nav>

        <UserMenu />
      </div>
    </header>
  );
}
