import { LOCALSTORAGE } from '@/common/utils';

import { audioPattern } from '@/common/config';
import {
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_CURRENTTIME,
  SET_AUDIO_BUFFERED,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_PATTERN,
  SET_VOLUME,
  SET_BEFORE_MUTED,
  SET_VOLUME_PLUS_TEN,
  SET_VOLUME_SUB_TEN,
} from './actionTypes';

const resetState = {
  running: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: 0,
  buffered: 0,
  volume: 100,
  // muted: false,
};

const initialState = {
  ...resetState,
  pattern: LOCALSTORAGE('pattern', 0),
  currentSong: LOCALSTORAGE('currentSong', {}),
  playlist: LOCALSTORAGE('playlist', []),
  history: LOCALSTORAGE('history', []),
  currentTime: LOCALSTORAGE('currentTime', 0),
  volume: LOCALSTORAGE('volume', 100),
  beforeMuted: LOCALSTORAGE('beforeMuted', 10),
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
      window.localStorage.setItem('currentTime', JSON.stringify(Number(action.payload)));
      return {
        ...state,
        currentTime: action.payload,
      };
    case SET_AUDIO_BUFFERED:
      return {
        ...state,
        buffered: action.payload,
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
    case SET_VOLUME:
      let volume = action.payload;
      if (volume > 100) volume = 100;
      if (volume < 0) volume = 0;
      window.localStorage.setItem('volume', JSON.stringify(volume));
      return {
        ...state,
        volume,
      };
    case SET_VOLUME_PLUS_TEN:
      const plusvolume = state.volume;
      if (plusvolume >= 90) {
        window.localStorage.setItem('volume', JSON.stringify(100));
        return {
          ...state,
          volume: 100,
        };
      }
      window.localStorage.setItem('volume', JSON.stringify(plusvolume + 10));
      return {
        ...state,
        volume: plusvolume + 10,
      };
    case SET_VOLUME_SUB_TEN:
      const subvolume = state.volume;
      if (subvolume <= 10) {
        window.localStorage.setItem('volume', JSON.stringify(0));
        return {
          ...state,
          volume: 0,
        };
      }
      window.localStorage.setItem('volume', JSON.stringify(subvolume - 10));
      return {
        ...state,
        volume: subvolume - 10,
      };
    case SET_BEFORE_MUTED:
      window.localStorage.setItem('beforeMuted', JSON.stringify(action.payload));
      return {
        ...state,
        beforeMuted: action.payload,
      };
    default:
      return state;
  }
};
