import produce from 'immer';
import { SET_VIDEO_LIST_INIT, SET_VIDEO_LIST_ID } from './actionTypes';

const initialState = {
  id: null,
  initStatus: false,
  categoryList: [],
  groupList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_LIST_INIT:
      return {
        ...state,
        initStatus: true,
        ...action.payload,
      };
    case SET_VIDEO_LIST_ID:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
