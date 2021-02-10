import { SET_AUDIO_IMMEDIATE, SET_AUDIO_RENNING, SET_AUDIO_CURRENTTIME } from '@/redux/actionTypes';
import { LOCALSTORAGE } from '@/common/utils';

const initialState = {
  running: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: LOCALSTORAGE('currentTime', 0),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO_IMMEDIATE:
      return {
        ...state,
        ...action.payload,
        playlist: [...state.playlist, action.payload.currentSong],
      };
    case SET_AUDIO_RENNING:
      return {
        ...state,
        running: action.payload.running,
      };
    case SET_AUDIO_CURRENTTIME:
      window.localStorage.setItem('currentTime', JSON.stringify(action.payload));
      return {
        ...state,
        currentTime: action.payload,
      };
    default:
      return state;
  }
};
