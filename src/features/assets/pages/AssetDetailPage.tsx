import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Loading } from "@/components/ui/Loading";
import { useAssetDetail } from "@/features/assets/hooks/useAssets";

export function AssetDetailPage() {
  const { t } = useTranslation("assets");
  const { uuid = "" } = useParams();
  const { data, isLoading, isError, refetch } = useAssetDetail(uuid);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorState message={t("loadError")} onRetry={refetch} />;
  if (!data) return <EmptyState message={t("empty")} />;

  return (
    <div>
      <h1 className="mb-2 text-lg font-semibold text-text">{data.name}</h1>
      <p className="text-text">{data.manufacturer}</p>
    </div>
  );
}
