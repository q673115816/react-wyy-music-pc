import {
  SET_AUDIO_IMMEDIATE, SET_AUDIO_RUNNING_TOGGLE, SET_AUDIO_CURRENTTIME, SET_AUDIO_CLEAR,
} from '@/redux/actionTypes';
import { LOCALSTORAGE } from '@/common/utils';

const resetState = {
  running: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: 0,
};

const initialState = {
  ...resetState,
  currentTime: LOCALSTORAGE('currentTime', 0),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO_IMMEDIATE:
      return {
        ...state,
        ...action.payload,
        running: true,
        playlist: [...state.playlist, action.payload.currentSong],
      };
    case SET_AUDIO_RUNNING_TOGGLE:
      return {
        ...state,
        running: !state.running,
      };
    case SET_AUDIO_CURRENTTIME:
      window.localStorage.setItem('currentTime', JSON.stringify(action.payload));
      return {
        ...state,
        currentTime: action.payload,
      };
    case SET_AUDIO_CLEAR:
      window.localStorage.removeItem('currentTime');
      return resetState;
    default:
      return state;
  }
};
