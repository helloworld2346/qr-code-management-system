import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ToastContainer } from "@/components/ui/Toast";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 print-area">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}