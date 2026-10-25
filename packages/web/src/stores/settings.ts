import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Order =
  | "推荐歌单"
  | "独家放送"
  | "最新音乐"
  | "推荐MV"
  | "主播电台";

export type Orders = Order[];

export const defaultOrder: Orders = [
  "推荐歌单",
  "独家放送",
  "最新音乐",
  "主播电台",
  "推荐MV",
];

interface SettingsState {
  theme: string;
  custom: boolean;
  font: string;
  order: Orders;
  globalLrcVisibility: boolean;
  setTheme: (theme: string) => void;
  setFont: (font: string) => void;
  setCustom: (custom: boolean) => void;
  setHomeOrder: (order: Orders) => void;
  setGlobalLrcToggle: () => void;
  setGlobalLrcHide: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "#EC4141",
      custom: false,
      font: "inherit",
      order: defaultOrder,
      globalLrcVisibility: false,
      setTheme: (theme) => set({ theme }),
      setFont: (font) => set({ font }),
      setCustom: (custom) => set({ custom }),
      setHomeOrder: (order) => set({ order }),
      setGlobalLrcToggle: () =>
        set((state) => ({ globalLrcVisibility: !state.globalLrcVisibility })),
      setGlobalLrcHide: () => set({ globalLrcVisibility: false }),
    }),
    {
      name: "wyy-settings",
      version: 1,
      partialize: (state) => ({
        theme: state.theme,
        custom: state.custom,
        font: state.font,
        order: state.order,
        globalLrcVisibility: state.globalLrcVisibility,
      }),
    }
  )
);
