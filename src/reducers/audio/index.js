import { LOCALSTORAGE } from '@/common/utils';

import { audioPattern } from '@/common/config';
import {
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_CURRENTTIME,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_PATTERN,
} from './actionTypes';

const resetState = {
  running: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: 0,
};

const initialState = {
  ...resetState,
  pattern: LOCALSTORAGE('pattern', 0),
  currentSong: LOCALSTORAGE('currentSong', {}),
  playlist: LOCALSTORAGE('playlist', []),
  history: LOCALSTORAGE('history', []),
  currentTime: LOCALSTORAGE('currentTime', 0),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO_IMMEDIATE:
      const { currentSong } = action.payload;
      const playlist = state.playlist.find((song) => song.id === currentSong.id)
        ? state.playlist
        : [...state.playlist, currentSong];
      const history = [currentSong, ...state.history.filter((history) => history.id !== currentSong.id)];
      window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
      window.localStorage.setItem('playlist', JSON.stringify(playlist));
      window.localStorage.setItem('history', JSON.stringify(history));
      return {
        ...state,
        ...action.payload,
        running: true,
        playlist,
        history,
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
    case SET_AUDIO_PLAYLIST_CLEAR:
      window.localStorage.removeItem('currentSong');
      window.localStorage.removeItem('currentTime');
      window.localStorage.removeItem('playlist');
      return {
        ...state,
        ...resetState,
        history: state.history,
      };
    case SET_AUDIO_HISTORY_CLEAR:
      window.localStorage.removeItem('history');
      return {
        ...state,
        history: [],
      };
    case SET_AUDIO_PATTERN:
      const pattern = (state.pattern + 1) % audioPattern.length;
      return {
        ...state,
        pattern,
      };
    default:
      return state;
  }
};
