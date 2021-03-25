import { LOCALSTORAGE } from '@/common/utils';
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
  SET_DIALOG_HOME_ORDER_SHOW,
  SET_SCREEN_FULL,
  SET_SCREEN_NORMAL,
  SET_POSITION_TRUE,
  SET_POSITION_FALSE,
  SET_TOAST,
  SET_LYRIC_SHOW,
  SET_LYRIC_HIDE,
} from './actionTypes';

const globalState = {
  POSITION: true,
  SCREEN: 'normal',
  globalVisibility: false,
  globalLastX: 0,
  globalLastY: 0,
  globalWidth: LOCALSTORAGE('width', 1022),
  globalHeight: LOCALSTORAGE('height', 670),
};

const visibilityState = {
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
  ...globalState,
  ...visibilityState,
  ...maskState,
  ...shareState,
  ...toastState,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_INSET:
      return {
        ...state,
        ...action.payload,
      };
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

    case SET_SCREEN_FULL:
      return {
        ...state,
        SCREEN: 'full',
      };
    case SET_SCREEN_NORMAL:
      return {
        ...state,
        SCREEN: 'normal',
      };
    case SET_POSITION_TRUE:
      return {
        ...state,
        POSITION: true,
      };
    case SET_POSITION_FALSE:
      return {
        ...state,
        POSITION: false,
      };
    case SET_TOAST:
      return {
        ...state,
        toastTitle: [action.payload.toastTitle],
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
    default:
      return state;
  }
};
