import { useTranslation } from "react-i18next";

export function PrintQueuePage() {
  const { t } = useTranslation("assets");
  return (
    <h1 className="text-lg font-semibold text-text print-area">
      {t("printQueue")}
    </h1>
  );
}
