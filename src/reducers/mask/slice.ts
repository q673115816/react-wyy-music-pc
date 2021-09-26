import { createSlice } from "@reduxjs/toolkit";

const visibilityState = {
  lyricVisibility: false,
  maskVisibility: false,
  searchVisibility: false,
  contextMenuVisibility: false,
  dialogDownloadVideoVisibility: false,
  dialogHomeOrderVisibility: false,
  dialogShareVisibility: false,
  dialogShareWXVisibility: false,
  dialogUploadAvatarVisibility: false,
  dialogCreatePlaylistVisibility: false,
  dialogUnSubscriptionVisibility: false,
  artistId: 0,
  popupStatus: "false",
  avatar: "",
};

const maskState = {
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuType: "",
  contextMenuItemId: 0,
  contextMenuItem: {},
  contextMenuSechma: [],
  contextMenuShareLink: "",
};

const shareState = {};

const toastState = {
  toastTitle: [""],
};

const initialState = {
  ...visibilityState,
  ...maskState,
  ...shareState,
  ...toastState,
};

const slice = createSlice({
  name: "mask",
  initialState,
  reducers: {
    setToast(state, action) {
      state.toastTitle = [action.payload];
    },
    setContextMenuShow(state, action) {
      Object.assign(state, action.payload);
      state.contextMenuVisibility = true;
    },
    setContextMenuShareLink(state, action) {
      Object.assign(state, action.payload);
    },
    setSearchShow(state) {
      // Object.assign(state, visibilityState, maskState, action.payload);
      state.searchVisibility = true;
    },
    setDialogShareShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogShareVisibility = true;
    },
    setDialogShareWXShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogShareWXVisibility = true;
    },
    setDialogUploadAvatarShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogUploadAvatarVisibility = true;
    },
    setDialogDownloadVideoShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogDownloadVideoVisibility = true;
    },
    setDialogCreatePlaylistShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogHomeOrderVisibility = true;
    },
    setDialogUnSubscriptionShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogUnSubscriptionVisibility = true;
    },
    setDialogHomeOrderShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogHomeOrderVisibility = true;
    },
    setDialogReset(state) {
      Object.assign(state, visibilityState, maskState);
    },
    setPopupLetterToggle(state) {
      state.popupStatus = state.popupStatus === "letter" ? "false" : "letter";
    },
    setPopupPlaylistToggle(state) {
      state.popupStatus =
        state.popupStatus === "playlist" ? "false" : "playlist";
    },
  },
});

export default slice.reducer;

export const {
  setContextMenuShareLink,
  setContextMenuShow,
  setDialogCreatePlaylistShow,
  setDialogDownloadVideoShow,
  setDialogHomeOrderShow,
  setDialogReset,
  setDialogShareShow,
  setDialogShareWXShow,
  setDialogUnSubscriptionShow,
  setDialogUploadAvatarShow,
  setPopupLetterToggle,
  setPopupPlaylistToggle,
  setSearchShow,
  setToast,
} = slice.actions;
