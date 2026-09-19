import { createBrowserRouter, Navigate } from "react-router-dom";

import { AssetCreatePage } from "@/features/assets/pages/AssetCreatePage";
import { AssetDetailPage } from "@/features/assets/pages/AssetDetailPage";
import { AssetListPage } from "@/features/assets/pages/AssetListPage";
import { ScannerPage } from "@/features/assets/pages/AssetScanPage";
import { PrintQueuePage } from "@/features/assets/pages/PrintQueuePage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { UnitsPage } from "@/features/units/pages/UnitsPage";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { RouteError } from "@/routes/RouteError";  

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" replace /> },
  {
    element: <AuthLayout />,
    errorElement: <RouteError />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <RouteError />,
    children: [
      { path: "/dashboard", element: <div>Dashboard</div> },
      {
        path: "/dashboard/assets",
        children: [
          { index: true, element: <AssetListPage /> },
          { path: "create", element: <AssetCreatePage /> },
          { path: ":uuid", element: <AssetDetailPage /> },
          { path: "print-queue", element: <PrintQueuePage /> },
        ],
      },
      { path: "/dashboard/scanner", element: <ScannerPage /> },
      { path: "/dashboard/weapons", element: <AssetListPage /> },
      {
        path: "/dashboard/units",
        element: (
          <ProtectedRoute allow="admin">
            <UnitsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Navigate to="/dashboard" replace /> },
]);
