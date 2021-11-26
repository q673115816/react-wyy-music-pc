import {
  SET_FULL,
  SET_PLAY,
  SET_BUFFERED,
  SET_DURATION,
  SET_CURRENTTIME,
  SET_JUMPTIME,
} from "./actionTypes";

export const initialState = {
  play: false,
  full: false,
  buffered: [],
  duration: 0,
  currentTime: 0,
  jumpTime: 0,
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
        buffered: action.payload.buffered,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload.duration,
      };
    case SET_CURRENTTIME:
      return {
        ...state,
        ...action.payload,
      };
    case SET_JUMPTIME:
      return {
        ...state,
        jumpTime: action.payload.jumpTime,
      };
    default:
      return state;
  }
};
