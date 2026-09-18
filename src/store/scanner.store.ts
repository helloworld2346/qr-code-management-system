import { create } from "zustand";

interface ScannerState {
  isScanning: boolean;
  lastUuid: string | null;
  start: () => void;
  stop: () => void;
  setUuid: (uuid: string) => void;
}

export const useScannerStore = create<ScannerState>((set) => ({
  isScanning: false,
  lastUuid: null,
  start: () => set({ isScanning: true }),
  stop: () => set({ isScanning: false }),
  setUuid: (uuid) => set({ lastUuid: uuid, isScanning: false }),
}));
