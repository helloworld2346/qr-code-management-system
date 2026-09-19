import { useTranslation } from "react-i18next";
import { FiBox, FiCheckCircle, FiTool } from "react-icons/fi";

export function DashboardPage() {
  const { t } = useTranslation("common");

  const cards = [
    { key: "total", icon: FiBox },
    { key: "available", icon: FiCheckCircle },
    { key: "maintenance", icon: FiTool },
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text">{t("dashboard")}</h1>
      <div className="flex flex-wrap">
        {cards.map(({ key, icon: Icon }) => (
          <div
            key={key}
            className="mb-4 mr-4 w-56 rounded-2xl border border-border bg-surface p-5 shadow-sm"
          >
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white">
              <Icon size={20} />
            </span>
            <p className="text-sm text-text opacity-70">{t(key)}</p>
            <p className="mt-1 text-2xl font-bold text-text">0</p>
          </div>
        ))}
      </div>
    </div>
  );
}
