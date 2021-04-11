import {
  SET_CONTEXTMENU_SHOW,
  SET_CONTEXTMENU_SHARE_LINK,
  SET_SEARCH_SHOW,
  SET_DIALOG_RESET,
  SET_DIALOG_SHARE_SHOW,
  SET_DIALOG_SHARE_WX_SHOW,
  SET_DIALOG_UPLOAD_AVATAR_SHOW,
  SET_DIALOG_CREATE_PLAYLIST_SHOW,
  SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  SET_DIALOG_HOME_ORDER_SHOW,
  SET_TOAST,
  SET_LYRIC_SHOW,
  SET_LYRIC_HIDE,
  SET_LYRIC_TOGGLE,

  SET_GLOBAL_LRC_TOGGLE,
  SET_GLOBAL_LRC_SHOW,
  SET_GLOBAL_LRC_HIDE,
} from './actionTypes';

export const setToast = (payload) => ({
  type: SET_TOAST,
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

export const setDialogHomeOrderShow = (payload) => ({
  type: SET_DIALOG_HOME_ORDER_SHOW,
  payload,
});

export const setDialogReset = () => ({
  type: SET_DIALOG_RESET,
});

export const setLyricShow = () => ({
  type: SET_LYRIC_SHOW,
});

export const setLyricHide = () => ({
  type: SET_LYRIC_HIDE,
});

export const setLyricToggle = () => ({
  type: SET_LYRIC_TOGGLE,
});

export const setGlobalLrcToggle = () => ({
  type: SET_GLOBAL_LRC_TOGGLE,
});

export const setGlobalLrcShow = () => ({
  type: SET_GLOBAL_LRC_SHOW,
});

export const setGlobalLrcHide = () => ({
  type: SET_GLOBAL_LRC_HIDE,
});
