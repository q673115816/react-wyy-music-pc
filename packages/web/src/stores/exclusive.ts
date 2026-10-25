import { create } from "zustand";
import { apiPersonalizedPrivatecontentList } from "@/api";

export interface ExclusiveItem {
  picUrl: string;
  videoId: number;
  id: number;
  name: string;
}

export interface ExclusiveState {
  result: ExclusiveItem[];
  scrollTop: number;
  setExclusiveResultAdd: (payload: { result: ExclusiveItem[] }) => void;
  setExclusiveResultEmpty: () => void;
  setExclusiveScrollTop: (payload: { scrollTop: number }) => void;
  fetchExclusive: (params: { limit: number; offset: number }) => Promise<void>;
}

export const useExclusiveStore = create<ExclusiveState>()((set) => ({
  result: [],
  scrollTop: 0,
  setExclusiveResultAdd: ({ result }) =>
    set((state) => ({ result: [...state.result, ...result] })),
  setExclusiveResultEmpty: () => set({ result: [] }),
  setExclusiveScrollTop: ({ scrollTop }) => set({ scrollTop }),
  fetchExclusive: async (params) => {
    const res = await apiPersonalizedPrivatecontentList(params);
    set((state) => ({
      result: [...state.result, ...(res?.result ?? [])],
    }));
  },
}));
