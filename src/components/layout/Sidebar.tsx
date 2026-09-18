import { NavLink } from "react-router-dom";

import { useAuthStore } from "@/store/auth.store";

export function Sidebar() {
  const role = useAuthStore((s) => s.user?.role);

  return (
    <nav className="w-48 bg-surface p-4 no-print">
      <NavLink to="/dashboard" className="mb-2 block text-text">
        Dashboard
      </NavLink>
      <NavLink to="/dashboard/assets" className="mb-2 block text-text">
        Assets
      </NavLink>
      <NavLink to="/dashboard/scanner" className="mb-2 block text-text">
        Scanner
      </NavLink>
      <NavLink to="/dashboard/weapons" className="mb-2 block text-text">
        Weapons
      </NavLink>
      {role === "admin" ? (
        <NavLink to="/dashboard/units" className="mb-2 block text-text">
          Units
        </NavLink>
      ) : null}
    </nav>
  );
}
