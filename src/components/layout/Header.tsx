import { ThemeLanguageToggle } from "@/components/layout/ThemeLanguageToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-black border-opacity-5 bg-surface px-4 py-2 no-print">
      <span className="font-semibold text-text">BCA</span>
      <ThemeLanguageToggle />
    </header>
  );
}
