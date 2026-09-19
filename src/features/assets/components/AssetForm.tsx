// src/features/assets/components/AssetForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import { assetSchema } from "@/features/assets/assets.schema";
import type { AssetFormValues } from "@/features/assets/assets.schema";

interface Props {
  defaultValues?: Partial<AssetFormValues>;
  onSubmit: (values: AssetFormValues) => void;
}

export function AssetForm({ defaultValues, onSubmit }: Props) {
  const { t } = useTranslation("assets");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetFormValues>({
    resolver: zodResolver(assetSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
      <input
        className="mb-3 block w-full rounded border px-2 py-1"
        placeholder={t("name")}
        {...register("name")}
      />
      {errors.name ? (
        <p className="mb-2 text-red-600">{t("required")}</p>
      ) : null}
      <input
        className="mb-3 block w-full rounded border px-2 py-1"
        placeholder={t("manufacturer")}
        {...register("manufacturer")}
      />
      <Button type="submit" className="mt-2 w-full">
        {t("save")}
      </Button>
    </form>
  );
}
