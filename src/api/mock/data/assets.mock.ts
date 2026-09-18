import type { Asset } from "@/features/assets/assets.types";

export const assetsMock: Asset[] = [
  {
    uuid: "11111111-1111-1111-1111-111111111111",
    name: "Máy bộ đàm Motorola",
    unitId: "unit-01",
    manufacturer: "Motorola",
    manufactureDate: "2022-01-15",
    borrowedDate: "2024-03-01",
    returnedDate: null,
    borrowedBy: "Nguyễn Văn A",
    status: "in_use",
  },
];
