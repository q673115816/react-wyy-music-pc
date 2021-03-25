import {
  SET_FULL,
  SET_PLAY,
  SET_BUFFERED,
  SET_DURATION,
  SET_CURRENTTIME,
} from './actionTypes';

export const initialState = {
  play: true,
  full: false,
  buffered: 0,
  duration: 0,
  currentTime: 0,
};

export default (state, action) => {
  switch (action.type) {
    case SET_PLAY:
      return {
        ...state,
        ...action.payload,
      };
    case SET_FULL:
      return {
        ...state,
        ...action.payload,
      };
    case SET_BUFFERED:
      return {
        ...state,
        ...action.payload,
      };
    case SET_DURATION:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CURRENTTIME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
