import { LOCALSTORAGE } from '@/common/utils';

import { audioPattern } from '@/common/config';
import produce from 'immer';
import {
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_RUNNING,
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

export default produce((draft, action) => {
  switch (action.type) {
    case SET_AUDIO_IMMEDIATE:
      const { currentSong } = action.payload;
      // const playlist = draft.playlist.find((song) => song.id === currentSong.id)
      //   ? draft.playlist
      //   : [...draft.playlist, currentSong];
      if (draft.playlist.every((song) => song.id !== currentSong.id)) {
        draft.playlist = [...draft.playlist, currentSong];
        window.localStorage.setItem('playlist', JSON.stringify(draft.playlist));
      }
      draft.history = [currentSong, ...draft.history.filter((history) => history.id !== currentSong.id)];
      draft.currentSong = currentSong;
      draft.running = true;
      // draft.currentTime = 0;
      window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
      window.localStorage.setItem('history', JSON.stringify(draft.history));
      break;
    case SET_AUDIO_RUNNING:
      draft.running = action.payload.running;
      break;
    case SET_AUDIO_CURRENTTIME:
      window.localStorage.setItem('currentTime', JSON.stringify(Number(action.payload)));
      draft.currentTime = action.payload;
      break;
    case SET_AUDIO_BUFFERED:
      draft.buffered = action.payload;
      break;
    case SET_AUDIO_PLAYLIST_CLEAR:
      {
        window.localStorage.removeItem('currentSong');
        window.localStorage.removeItem('currentTime');
        window.localStorage.removeItem('playlist');
        draft.currentTime = 0;
        draft.currentSong = {};
        draft.playlist = [];
      }
      break;
    case SET_AUDIO_HISTORY_CLEAR:
      {
        window.localStorage.removeItem('history');
        draft.history = [];
      }
      break;
    case SET_AUDIO_PATTERN:
      {
        const pattern = (draft.pattern + 1) % audioPattern.length;
        draft.pattern = pattern;
      }
      break;
    case SET_VOLUME:
      {
        let volume = action.payload;
        if (volume > 100) volume = 100;
        if (volume < 0) volume = 0;
        window.localStorage.setItem('volume', JSON.stringify(volume));
        draft.volume = volume;
      }
      break;
    case SET_VOLUME_PLUS_TEN:
      {
        const plusvolume = draft.volume >= 90 ? 100 : draft.valume + 10;
        window.localStorage.setItem('volume', JSON.stringify(plusvolume));
        draft.valume = plusvolume;
      }
      break;
    case SET_VOLUME_SUB_TEN:
      {
        const subvolume = draft.volume <= 10 ? 0 : draft.volume - 10;
        window.localStorage.setItem('volume', JSON.stringify(subvolume));
        draft.valume = subvolume;
      }
      break;
    case SET_BEFORE_MUTED:
      window.localStorage.setItem('beforeMuted', JSON.stringify(action.payload));
      draft.beforeMuted = action.payload;
      break;
    default:
  }
}, initialState);
