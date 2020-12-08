import { SET_FRIEND_INIT, SET_FRIEND_EVENT, SET_COMMENT_EVENT } from '@/redux/actionTypes';

const initialState = {
  hot: [],
  event: [],
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_INIT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FRIEND_EVENT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_COMMENT_EVENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
