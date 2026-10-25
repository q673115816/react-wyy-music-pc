import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SearchState {
  keywords: string;
  count: number;
  history: string[];
  setKeywords: (payload: { keywords: string }) => void;
  setSearchCount: (payload: { count: number }) => void;
  setHistory: (payload: { keywords: string }) => void;
  delHistory: (payload: { keywords: string }) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      keywords: "",
      count: 0,
      history: [],
      setKeywords: ({ keywords }) => set({ keywords }),
      setSearchCount: ({ count }) => set({ count }),
      setHistory: ({ keywords }) =>
        set((state) => ({
          history: [
            keywords,
            ...state.history.filter((item) => item !== keywords),
          ],
        })),
      delHistory: ({ keywords }) =>
        set((state) => ({
          history: state.history.filter((item) => item !== keywords),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "wyy-search",
      version: 1,
      partialize: (state) => ({
        keywords: state.keywords,
        count: state.count,
        history: state.history,
      }),
    }
  )
);
