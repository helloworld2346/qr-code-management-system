export type AssetStatus = "in_use" | "available" | "maintenance" | "lost";

export interface Asset {
  uuid: string;
  name: string;
  unitId: string;
  manufacturer: string;
  manufactureDate: string;
  borrowedDate: string | null;
  returnedDate: string | null;
  borrowedBy: string | null;
  status: AssetStatus;
}
