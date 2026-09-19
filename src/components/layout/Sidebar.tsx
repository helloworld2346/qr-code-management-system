import { useTranslation } from "react-i18next";
import {
  FiBox,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiLayers,
  FiMaximize,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import { useAuthStore } from "@/store/auth.store";
import { useSidebarStore } from "@/store/sidebar.store";

export function Sidebar() {
  const { t } = useTranslation("common");
  const role = useAuthStore((s) => s.user?.role);
  const collapsed = useSidebarStore((s) => s.collapsed);
  const toggle = useSidebarStore((s) => s.toggle);

  const items = [
    { to: "/dashboard", label: t("dashboard"), icon: FiGrid, end: true },
    { to: "/dashboard/assets", label: t("assets"), icon: FiBox, end: false },
    {
      to: "/dashboard/scanner",
      label: t("scanner"),
      icon: FiMaximize,
      end: false,
    },
    {
      to: "/dashboard/weapons",
      label: t("weapons"),
      icon: FiLayers,
      end: false,
    },
  ];

  const linkBase =
    "mb-1 flex items-center rounded-xl px-3 py-2 text-sm font-medium text-white text-opacity-80 transition-colors hover:bg-white hover:bg-opacity-10 hover:text-opacity-100";
  const linkActive = "bg-white bg-opacity-20 text-opacity-100";

  return (
    <nav
      className={`flex h-full flex-col bg-primary p-3 no-print transition-all ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      <div className="mb-6 flex items-center px-1">
        <img src={logo} alt="BCA" className="h-10 w-10 rounded-xl" />
        {collapsed ? null : (
          <span className="ml-3 text-lg font-bold text-white">
            {t("appName")}
          </span>
        )}
      </div>

      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : ""}`
          }
          title={collapsed ? label : undefined}
        >
          <Icon size={20} className="shrink-0" />
          {collapsed ? null : <span className="ml-3">{label}</span>}
        </NavLink>
      ))}

      {role === "admin" ? (
        <NavLink
          to="/dashboard/units"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : ""}`
          }
          title={collapsed ? t("units") : undefined}
        >
          <FiLayers size={20} className="shrink-0" />
          {collapsed ? null : <span className="ml-3">{t("units")}</span>}
        </NavLink>
      ) : null}

      <button
        type="button"
        onClick={toggle}
        aria-label={t("toggleSidebar")}
        className="mt-auto flex items-center rounded-xl px-3 py-2 text-sm font-medium text-white text-opacity-80 transition-colors hover:bg-white hover:bg-opacity-10"
      >
        {collapsed ? (
          <FiChevronRight size={20} className="shrink-0" />
        ) : (
          <>
            <FiChevronLeft size={20} className="shrink-0" />
            <span className="ml-3">{t("collapse")}</span>
          </>
        )}
      </button>
    </nav>
  );
}
