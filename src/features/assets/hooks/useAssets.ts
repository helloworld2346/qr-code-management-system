import { useQuery } from "@tanstack/react-query";

import {
  fetchAssets,
  fetchAssetByUuid,
} from "@/features/assets/api/assets.api";
import { useAuthStore } from "@/store/auth.store";

export function useAssets() {
  const unitId = useAuthStore((s) => s.user?.unitId ?? "");
  return useQuery({
    queryKey: ["assets", "list", { unitId }],
    queryFn: () => fetchAssets(unitId),
    enabled: Boolean(unitId),
  });
}

export function useAssetDetail(uuid: string) {
  return useQuery({
    queryKey: ["assets", "detail", uuid],
    queryFn: () => fetchAssetByUuid(uuid),
    enabled: Boolean(uuid),
  });
}
