import { ThemeLanguageToggle } from "@/components/layout/ThemeLanguageToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-surface px-4 py-2 no-print">
      <span className="font-semibold text-text">QR Asset</span>
      <ThemeLanguageToggle />
    </header>
  );
}
