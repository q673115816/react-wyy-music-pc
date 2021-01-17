import { SET_CONTEXTMENU_SHOW, SET_DIALOG_RESET, SET_DIALOG_SHARE_SHOW } from '@/redux/actionTypes';

const initialState = {
  visibility: false,
  contextMenuVisibility: false,
  dialogShareVisibility: false,
  contextMenuX: 0,
  contextMenuY: 0,
  contextMenuTotal: 0,
  contextMenuItem: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTEXTMENU_SHOW:
      return {
        ...initialState,
        visibility: true,
        contextMenuVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_SHARE_SHOW:
      return {
        ...initialState,
        visibility: true,
        dialogShareVisibility: true,
        ...action.payload,
      };
    case SET_DIALOG_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
