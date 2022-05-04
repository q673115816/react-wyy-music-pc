import { createSlice, nanoid } from "@reduxjs/toolkit";

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

const initialState = {
  ...visibilityState,
  ...maskState,
  ...shareState,
};

const slice = createSlice({
  name: "mask",
  initialState,
  reducers: {
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
    setDialogShareShow(state) {
      state.dialogShareVisibility = true;
    },
    setDialogShareWXShow(state) {
      // Object.assign(state, visibilityState, action.payload);
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
    setDialogCreatePlaylistShow(state) {
      state.dialogHomeOrderVisibility = true;
    },
    setDialogUnSubscriptionShow(state, action) {
      Object.assign(state, visibilityState, action.payload);
      state.dialogUnSubscriptionVisibility = true;
    },
    setDialogHomeOrderShow(state) {
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

export const maskSelector = ({ mask }) => mask;

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
} = slice.actions;
