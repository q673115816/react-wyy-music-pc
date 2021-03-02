import {
  SET_CONTEXTMENU_SHOW,
  SET_CONTEXTMENU_SHARE_LINK,
  SET_SEARCH_SHOW,
  SET_DIALOG_RESET,
  SET_DIALOG_SHARE_SHOW,
  SET_GLOBAL_INSET,
  SET_DIALOG_SHARE_WX_SHOW,
  SET_DIALOG_UPLOAD_AVATAR_SHOW,
  SET_DIALOG_CREATE_PLAYLIST_SHOW,
  SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  SET_SCREEN_FULL,
  SET_TOAST,
} from './actionTypes';

export const setToast = (payload) => ({
  type: SET_TOAST,
  payload,
});

export const setGlobalInset = (payload) => ({
  type: SET_GLOBAL_INSET,
  payload,
});

export const setContextMenuShow = (payload) => ({
  type: SET_CONTEXTMENU_SHOW,
  payload,
});

export const setContextMenuShareLink = (payload) => ({
  type: SET_CONTEXTMENU_SHARE_LINK,
  payload,
});

export const setSearchShow = (payload) => ({
  type: SET_SEARCH_SHOW,
  payload,
});

export const setDialogShareShow = (payload) => ({
  type: SET_DIALOG_SHARE_SHOW,
  payload,
});

export const setDialogShareWXShow = (payload) => ({
  type: SET_DIALOG_SHARE_WX_SHOW,
  payload,
});

export const setDialogUploadAvatarShow = (payload) => ({
  type: SET_DIALOG_UPLOAD_AVATAR_SHOW,
  payload,
});

export const setDialogCreatePlaylistShow = (payload) => ({
  type: SET_DIALOG_CREATE_PLAYLIST_SHOW,
  payload,
});

export const setDialogUnSubscriptionShow = (payload) => ({
  type: SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  payload,
});

export const setDialogReset = () => ({
  type: SET_DIALOG_RESET,
});

export const setScreenFull = (payload) => ({
  type: SET_SCREEN_FULL,
  payload,
});
