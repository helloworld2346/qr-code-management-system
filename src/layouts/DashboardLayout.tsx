import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ToastContainer } from "@/components/ui/Toast";

export function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-primary text-text">
      <Sidebar />
      <div className="m-3 ml-0 flex flex-1 flex-col overflow-hidden rounded-2xl bg-bg shadow-lg">
        <Header />
        <main className="flex-1 overflow-auto p-4 print-area">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
