import { SET_CONTEXTMENU_SHOW, SET_DIALOG_RESET } from '@/redux/actionTypes';

const initialState = {
  visibility: false,
  contextMenuVisibility: false,
  contextMenuX: 0,
  contextMenuY: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTEXTMENU_SHOW:
      return {
        ...state,
        visibility: true,
        contextMenuVisibility: true,
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
