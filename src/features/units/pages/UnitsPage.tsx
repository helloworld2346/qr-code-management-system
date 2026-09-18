import { useTranslation } from "react-i18next";

export function UnitsPage() {
  const { t } = useTranslation("common");
  return <h1 className="text-lg font-semibold text-text">{t("units")}</h1>;
}
