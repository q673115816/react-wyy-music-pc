import { create } from "zustand";

export interface LetterState {
  nickname: string;
  hint: string;
  uid: string;
  showMsgPrivateHistory: boolean;
  privatMsgs: any[];
  setMsgPrivateHistory: (payload: Partial<LetterState>) => void;
}

export const useLetterStore = create<LetterState>()((set) => ({
  nickname: "",
  hint: "",
  uid: "",
  showMsgPrivateHistory: false,
  privatMsgs: [],
  setMsgPrivateHistory: (payload) =>
    set((state) => ({ ...state, ...payload })),
}));
