import { useCallback } from "react";

import { useScannerStore } from "@/store/scanner.store";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidUuid(value: string): boolean {
  return UUID_RE.test(value.trim());
}

export function useScanner() {
  const { isScanning, lastUuid, start, stop, setUuid } = useScannerStore();

  const onScan = useCallback(
    (raw: string) => {
      const value = raw.trim();
      if (isValidUuid(value)) setUuid(value);
    },
    [setUuid],
  );

  return { isScanning, lastUuid, start, stop, onScan };
}
