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

const visibilityState = {
  globalLrcVisibility: false,
  lyricVisibility: false,
  maskVisibility: false,
  searchVisibility: false,
  contextMenuVisibility: false,
  dialogHomeOrderVisibility: false,
  dialogShareVisibility: false,
  dialogShareWXVisibility: false,
  dialogUploadAvatarVisibility: false,
  dialogCreatePlaylistVisibility: false,
  dialogUnSubscriptionVisibility: false,
  artistId: 0,
};

const maskState = {
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuType: '',
  contextMenuItemId: 0,
  contextMenuItem: {},
  contextMenuSechma: [],
  contextMenuShareLink: '',
};

const shareState = {

};

const toastState = {
  toastTitle: [''],
};

const initialState = {
  ...visibilityState,
  ...maskState,
  ...shareState,
  ...toastState,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTEXTMENU_SHOW:
      return {
        ...state,
        ...visibilityState,
        ...maskState,
        visibility: true,
        contextMenuVisibility: true,
        ...action.payload,
      };
    case SET_CONTEXTMENU_SHARE_LINK:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_SHOW:
      return {
        ...state,
        ...visibilityState,
        ...maskState,
        visibility: true,
        searchVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_SHARE_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogShareVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_SHARE_WX_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogShareWXVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_UPLOAD_AVATAR_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogUploadAvatarVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_CREATE_PLAYLIST_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogCreatePlaylistVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_UN_SUBSCRIPTION_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogUnSubscriptionVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_HOME_ORDER_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogHomeOrderVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_RESET:
      return {
        ...state,
        ...visibilityState,
        ...maskState,
      };

    case SET_TOAST:
      return {
        ...state,
        toastTitle: [action.payload],
      };
    case SET_LYRIC_SHOW:
      return {
        ...state,
        lyricVisibility: true,
      };
    case SET_LYRIC_HIDE:
      return {
        ...state,
        lyricVisibility: false,
      };
    case SET_LYRIC_TOGGLE:
      return {
        ...state,
        lyricVisibility: !state.lyricVisibility,
      };

    case SET_GLOBAL_LRC_TOGGLE:
      return {
        ...state,
        globalLrcVisibility: !state.globalLrcVisibility,
      };
    case SET_GLOBAL_LRC_SHOW:
      return {
        ...state,
        globalLrcVisibility: true,
      };
    case SET_GLOBAL_LRC_HIDE:
      return {
        ...state,
        globalLrcVisibility: false,
      };
    default:
      return state;
  }
};
