import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VolumeState {
  volume: number;
  beforeMuted: number;
  setVolume: (volume: number) => void;
  setVolumePlusTen: () => void;
  setVolumeSubTen: () => void;
  setBeforeMuted: (volume: number) => void;
}

const clamp = (volume: number) => Math.min(100, Math.max(0, volume));

export const useVolumeStore = create<VolumeState>()(
  persist(
    (set) => ({
      volume: 100,
      beforeMuted: 10,
      setVolume: (volume) => set({ volume: clamp(volume) }),
      setVolumePlusTen: () =>
        set((state) => ({ volume: state.volume >= 90 ? 100 : state.volume + 10 })),
      setVolumeSubTen: () =>
        set((state) => ({ volume: state.volume <= 10 ? 0 : state.volume - 10 })),
      setBeforeMuted: (beforeMuted) => set({ beforeMuted }),
    }),
    {
      name: "wyy-volume",
      version: 1,
      partialize: (state) => ({
        volume: state.volume,
        beforeMuted: state.beforeMuted,
      }),
    }
  )
);
