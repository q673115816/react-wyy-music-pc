import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CommonState {
  history: any[];
  newMsgCount: number;
  msgs: any[];
  comments: any[];
  forwards: any[];
  notices: any[];
  baseUrl: string;
  gitUrl: string;
  setMsgPrivate: (payload: Partial<CommonState>) => void;
}

export const useCommonStore = create<CommonState>()(
  persist(
    (set) => ({
      history: [],
      newMsgCount: 0,
      msgs: [],
      comments: [],
      forwards: [],
      notices: [],
      baseUrl: "https://music.163.com",
      gitUrl: "https://neteasecloudmusic.fun",
      setMsgPrivate: (payload) => set((state) => ({ ...state, ...payload })),
    }),
    {
      name: "wyy-common",
      version: 1,
      partialize: (state) => ({
        history: state.history,
        newMsgCount: state.newMsgCount,
        msgs: state.msgs,
        comments: state.comments,
        forwards: state.forwards,
        notices: state.notices,
        baseUrl: state.baseUrl,
        gitUrl: state.gitUrl,
      }),
    }
  )
);
