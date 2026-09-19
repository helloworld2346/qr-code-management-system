import { useTranslation } from "react-i18next";
import { FiBox, FiGrid, FiMaximize, FiPrinter, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import { useAuthStore } from "@/store/auth.store";

export function Sidebar() {
  const { t } = useTranslation("common");
  const role = useAuthStore((s) => s.user?.role);

  const linkBase =
    "mb-1 flex items-center rounded-xl px-3 py-2 text-sm font-medium text-white transition-colors";
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${
      isActive
        ? "bg-white bg-opacity-20 shadow"
        : "text-opacity-80 hover:bg-white hover:bg-opacity-10"
    }`;

  return (
    <nav className="min-h-screen w-56 bg-gradient-to-b from-primary to-primary-hover p-4 no-print">
      <div className="mb-8 flex items-center">
        <img
          src={logo}
          alt="BCA"
          className="mr-2 h-10 w-10 rounded-xl bg-white p-1"
        />
        <span className="text-lg font-bold tracking-wide text-white">BCA</span>
      </div>

      <NavLink to="/dashboard" end className={linkClass}>
        <FiGrid className="mr-2" size={18} />
        {t("dashboard")}
      </NavLink>
      <NavLink to="/dashboard/assets" className={linkClass}>
        <FiBox className="mr-2" size={18} />
        {t("assets")}
      </NavLink>
      <NavLink to="/dashboard/scanner" className={linkClass}>
        <FiMaximize className="mr-2" size={18} />
        {t("scanner")}
      </NavLink>
      <NavLink to="/dashboard/assets/print-queue" className={linkClass}>
        <FiPrinter className="mr-2" size={18} />
        {t("printQueue")}
      </NavLink>
      {role === "admin" ? (
        <NavLink to="/dashboard/units" className={linkClass}>
          <FiUsers className="mr-2" size={18} />
          {t("units")}
        </NavLink>
      ) : null}
    </nav>
  );
}
