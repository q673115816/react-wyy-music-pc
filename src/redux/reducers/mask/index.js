import {
  SET_CONTEXTMENU_SHOW, SET_DIALOG_RESET, SET_DIALOG_SHARE_SHOW, SET_GLOBAL_INSET, SET_DIALOG_SHARE_WX_SHOW,
} from '@/redux/actionTypes';

const globalState = {
  globalVisibility: false,
  globalLastX: 0,
  globalLastY: 0,
};

const visibilityState = {
  maskVisibility: false,
  contextMenuVisibility: false,
  dialogShareVisibility: false,
  dialogShareWXVisibility: false,
};

const maskState = {
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuType: '',
  contextMenuItemId: 0,
  contextMenuItem: {},
};

const shareState = {

};

const initialState = {
  ...globalState, ...visibilityState, ...maskState, ...shareState,
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
        ...maskState,
        visibility: true,
        contextMenuVisibility: true,
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
    case SET_DIALOG_RESET:
      return {
        ...state,
        ...maskState,
      };
    default:
      return state;
  }
};
