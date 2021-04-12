import {
  SET_FRIEND_INIT,
  SET_FRIEND_EVENT,
  SET_FRIEND_EVENT_ADD,
  SET_FRIEND_EVENT_RESET,
  SET_COMMENT_EVENT,
  SET_FRIEND_HOT,
} from './actionTypes';

const initialState = {
  hot: [],
  event: [],
  comments: [],
  hotComments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_INIT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FRIEND_HOT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FRIEND_EVENT_ADD:
      return {
        ...state,
        event: [...state.event, ...action.payload.event],
      };
    case SET_FRIEND_EVENT_RESET:
      return {
        ...state,
        event: [],
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
