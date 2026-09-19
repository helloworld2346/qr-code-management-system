import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { logger } from "@/utils/logger";

export function RouteError() {
  const { t } = useTranslation("common");
  const error = useRouteError();

  logger.error("Route error:", error);

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : t("unknownError");

  return (
    <div className="min-h-screen bg-bg p-8 text-center text-text">
      <h1 className="mb-2 text-xl font-semibold">{t("errorTitle")}</h1>
      <p className="mb-4 text-red-600">{message}</p>
      <Button onClick={() => window.location.assign("/dashboard")}>
        {t("backHome")}
      </Button>
    </div>
  );
}
