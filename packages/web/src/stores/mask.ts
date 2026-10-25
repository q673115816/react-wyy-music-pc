import { create } from "zustand";

const visibilityState = {
  loginVisibility: false,
  lyricVisibility: false,
  maskVisibility: false,
  searchVisibility: false,
  contextMenuVisibility: false,
  dialogDownloadVideoVisibility: false,
  dialogHomeOrderVisibility: false,
  dialogShareVisibility: false,
  dialogShareWXVisibility: false,
  dialogCreatePlaylistVisibility: false,
  dialogUnSubscriptionVisibility: false,
  artistId: 0,
  popupStatus: "false",
};

const maskState = {
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuType: "",
  contextMenuItemId: 0,
  contextMenuItem: {} as any,
  contextMenuSchema: [] as any[],
  contextMenuShareLink: "",
};

export interface MaskState {
  loginVisibility: boolean;
  lyricVisibility: boolean;
  maskVisibility: boolean;
  searchVisibility: boolean;
  contextMenuVisibility: boolean;
  dialogDownloadVideoVisibility: boolean;
  dialogHomeOrderVisibility: boolean;
  dialogShareVisibility: boolean;
  dialogShareWXVisibility: boolean;
  dialogCreatePlaylistVisibility: boolean;
  dialogUnSubscriptionVisibility: boolean;
  artistId: number;
  popupStatus: string;
  contextMenuX: number;
  contextMenuY: number;
  contextMenuTotal: number;
  contextMenuType: string;
  contextMenuItemId: number;
  contextMenuItem: any;
  contextMenuSchema: any[];
  contextMenuShareLink: string;
  setContextMenuShow: (payload: Partial<MaskState>) => void;
  setContextMenuShareLink: (payload: Partial<MaskState>) => void;
  setSearchShow: () => void;
  setDialogShareShow: () => void;
  setDialogShareWXShow: () => void;
  setDialogDownloadVideoShow: (payload?: Partial<MaskState>) => void;
  setDialogCreatePlaylistShow: () => void;
  setDialogUnSubscriptionShow: (payload?: Partial<MaskState>) => void;
  setDialogHomeOrderShow: () => void;
  setDialogReset: () => void;
  setPopupLetterToggle: () => void;
  setPopupPlaylistToggle: () => void;
  toggleLoginVisibility: () => void;
}

export const useMaskStore = create<MaskState>()((set) => ({
  ...visibilityState,
  ...maskState,
  setContextMenuShow: (payload) =>
    set((state) => ({ ...state, ...payload, contextMenuVisibility: true })),
  setContextMenuShareLink: (payload) =>
    set((state) => ({ ...state, ...payload })),
  setSearchShow: () => set({ searchVisibility: true }),
  setDialogShareShow: () => set({ dialogShareVisibility: true }),
  setDialogShareWXShow: () => set({ dialogShareWXVisibility: true }),
  setDialogDownloadVideoShow: (payload) =>
    set((state) => ({
      ...state,
      ...payload,
      dialogDownloadVideoVisibility: true,
    })),
  setDialogCreatePlaylistShow: () =>
    set({ dialogCreatePlaylistVisibility: true }),
  setDialogUnSubscriptionShow: (payload) =>
    set((state) => ({
      ...state,
      ...payload,
      dialogUnSubscriptionVisibility: true,
    })),
  setDialogHomeOrderShow: () => set({ dialogHomeOrderVisibility: true }),
  setDialogReset: () => set({ ...visibilityState, ...maskState }),
  setPopupLetterToggle: () =>
    set((state) => ({
      popupStatus: state.popupStatus === "letter" ? "false" : "letter",
    })),
  setPopupPlaylistToggle: () =>
    set((state) => ({
      popupStatus: state.popupStatus === "playlist" ? "false" : "playlist",
    })),
  toggleLoginVisibility: () =>
    set((state) => ({ loginVisibility: !state.loginVisibility })),
}));
