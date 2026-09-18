import { useTranslation } from "react-i18next";

import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Loading } from "@/components/ui/Loading";
import { useAssets } from "@/features/assets/hooks/useAssets";

export function AssetListPage() {
  const { t } = useTranslation("assets");
  const { data, isLoading, isError, refetch } = useAssets();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorState message={t("loadError")} onRetry={refetch} />;
  if (!data || data.length === 0) return <EmptyState message={t("empty")} />;

  return (
    <ul>
      {data.map((a) => (
        <li key={a.uuid} className="mb-2">
          {a.name}
        </li>
      ))}
    </ul>
  );
}
