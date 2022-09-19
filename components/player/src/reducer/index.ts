import {
  SET_FULL,
  SET_PLAY,
  SET_BUFFERED,
  SET_DURATION,
  SET_CURRENTTIME,
  SET_JUMPTIME,
} from "./actionTypes";
import { createContext } from "react";

export const VideoContext = createContext(null);

export const { Provider } = VideoContext;

interface State {
  play: boolean;
  full: boolean;
  buffered: number[];
  duration: number;
  currentTime: number;
  jumpTime: number;
}

interface Action {
  type: string;
  payload: any;
}

export const initialState = {
  play: false,
  full: false,
  buffered: [],
  duration: 0,
  currentTime: 0,
  jumpTime: 0,
};

export default (state: State, action: Action) => {
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
