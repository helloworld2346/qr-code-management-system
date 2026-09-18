import { useTranslation } from "react-i18next";

export function ScannerPage() {
  const { t } = useTranslation("scanner");
  return <h1 className="text-lg font-semibold text-text">{t("title")}</h1>;
}
