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

const STATUS_OPTIONS: AssetFormValues["status"][] = [
  "in_use",
  "available",
  "maintenance",
  "lost",
];

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

  const inputClass = "mb-1 block w-full rounded border px-2 py-1";
  const errorClass = "mb-2 text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
      <label className="mb-1 block text-sm text-text">{t("name")}</label>
      <input className={inputClass} {...register("name")} />
      {errors.name ? <p className={errorClass}>{t("required")}</p> : null}

      <label className="mb-1 block text-sm text-text">{t("unitId")}</label>
      <input className={inputClass} {...register("unitId")} />
      {errors.unitId ? <p className={errorClass}>{t("required")}</p> : null}

      <label className="mb-1 block text-sm text-text">
        {t("manufacturer")}
      </label>
      <input className={inputClass} {...register("manufacturer")} />
      {errors.manufacturer ? (
        <p className={errorClass}>{t("required")}</p>
      ) : null}

      <label className="mb-1 block text-sm text-text">
        {t("manufactureDate")}
      </label>
      <input
        type="date"
        className={inputClass}
        {...register("manufactureDate")}
      />
      {errors.manufactureDate ? (
        <p className={errorClass}>{t("required")}</p>
      ) : null}

      <label className="mb-1 block text-sm text-text">{t("status")}</label>
      <select className={inputClass} {...register("status")}>
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {t(`status_${s}`)}
          </option>
        ))}
      </select>
      {errors.status ? <p className={errorClass}>{t("required")}</p> : null}

      <label className="mb-1 block text-sm text-text">
        {t("borrowedDate")}
      </label>
      <input
        type="date"
        className={inputClass}
        {...register("borrowedDate", {
          setValueAs: (v) => (v === "" ? null : v),
        })}
      />

      <label className="mb-1 block text-sm text-text">
        {t("returnedDate")}
      </label>
      <input
        type="date"
        className={inputClass}
        {...register("returnedDate", {
          setValueAs: (v) => (v === "" ? null : v),
        })}
      />

      <label className="mb-1 block text-sm text-text">{t("borrowedBy")}</label>
      <input
        className={inputClass}
        {...register("borrowedBy", {
          setValueAs: (v) => (v === "" ? null : v),
        })}
      />

      <Button type="submit" className="mt-3 w-full">
        {t("save")}
      </Button>
    </form>
  );
}
