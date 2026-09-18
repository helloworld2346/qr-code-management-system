import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/auth.store";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (values: LoginValues) => {
    login(
      { id: "1", username: values.username, unitId: "unit-01", role: "admin" },
      "mock-token",
    );
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-72 rounded bg-surface p-6"
    >
      <h1 className="mb-4 text-lg font-semibold text-text">{t("login")}</h1>
      <input
        className="mb-2 block w-full rounded border px-2 py-1"
        placeholder={t("username")}
        {...register("username")}
      />
      {errors.username ? (
        <p className="mb-2 text-red-600">{t("loginError")}</p>
      ) : null}
      <input
        type="password"
        className="mb-4 block w-full rounded border px-2 py-1"
        placeholder={t("password")}
        {...register("password")}
      />
      <Button type="submit" className="w-full">
        {t("login")}
      </Button>
    </form>
  );
}
