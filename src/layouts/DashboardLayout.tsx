import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/layout/Topbar";
import { ToastContainer } from "@/components/ui/Toast";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Topbar />
      <main className="mx-auto w-full max-w-6xl p-4 print-area">
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
}
