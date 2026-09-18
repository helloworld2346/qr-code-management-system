import { useTranslation } from "react-i18next";

export function AssetCreatePage() {
  const { t } = useTranslation("assets");
  return <h1 className="text-lg font-semibold text-text">{t("create")}</h1>;
}
