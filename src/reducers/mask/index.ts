import {
  SET_CONTEXTMENU_SHOW,
  SET_CONTEXTMENU_SHARE_LINK,
  SET_SEARCH_SHOW,
  SET_DIALOG_RESET,
  SET_DIALOG_SHARE_SHOW,
  SET_DIALOG_SHARE_WX_SHOW,
  SET_DIALOG_UPLOAD_AVATAR_SHOW,
  SET_DIALOG_DOWNLOAD_VIDEO_SHOW,
  SET_DIALOG_CREATE_PLAYLIST_SHOW,
  SET_DIALOG_UN_SUBSCRIPTION_SHOW,
  SET_DIALOG_HOME_ORDER_SHOW,
  SET_TOAST,

  SET_POPUP_LETTER_TOGGLE,
  SET_POPUP_PLAYLIST_TOGGLE,
} from './actionTypes';

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
  popupStatus: 'false',
  avatar: '',
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
        // ...visibilityState,
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
    case SET_DIALOG_DOWNLOAD_VIDEO_SHOW:
      return {
        ...state,
        ...visibilityState,
        visibility: true,
        dialogDownloadVideoVisibility: true,
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

    case SET_POPUP_LETTER_TOGGLE:
      return {
        ...state,
        popupStatus: state.popupStatus === 'letter' ? 'false' : 'letter',
      };
    case SET_POPUP_PLAYLIST_TOGGLE:
      return {
        ...state,
        popupStatus: state.popupStatus === 'playlist' ? 'false' : 'playlist',
      };
    default:
      return state;
  }
};
