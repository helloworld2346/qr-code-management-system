import { z } from "zod";

export const assetSchema = z.object({
  name: z.string().min(1),
  unitId: z.string().min(1),
  manufacturer: z.string().min(1),
  manufactureDate: z.string().min(1),
  borrowedDate: z.string().nullable(),
  returnedDate: z.string().nullable(),
  borrowedBy: z.string().nullable(),
  status: z.enum(["in_use", "available", "maintenance", "lost"]),
});

export type AssetFormValues = z.infer<typeof assetSchema>;
