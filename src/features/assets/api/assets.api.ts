import { http } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import { mockResolve, USE_MOCK } from "@/api/mock";
import { assetsMock } from "@/api/mock/data/assets.mock";
import type { Asset } from "@/features/assets/assets.types";

export async function fetchAssets(unitId: string): Promise<Asset[]> {
  if (USE_MOCK) {
    return mockResolve(assetsMock.filter((a) => a.unitId === unitId));
  }
  const res = await http.get<Asset[]>(ENDPOINTS.assets.list, {
    params: { unitId },
  });
  return res.data;
}

export async function fetchAssetByUuid(uuid: string): Promise<Asset> {
  if (USE_MOCK) {
    const found = assetsMock.find((a) => a.uuid === uuid);
    return mockResolve(found as Asset, !found);
  }
  const res = await http.get<Asset>(ENDPOINTS.assets.detail(uuid));
  return res.data;
}
