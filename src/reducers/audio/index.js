import { LOCALSTORAGE } from '@/common/utils';

import { audioPattern } from '@/common/config';
import produce from 'immer';
import {
  SET_SONG,
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_IMMEDIATE_NEXT,
  SET_AUDIO_PLAYLIST,
  SET_AUDIO_PLAYLIST_ADD,
  SET_AUDIO_PREV,
  SET_AUDIO_NEXT,
  SET_AUDIO_RUNNING,
  SET_AUDIO_RUNNING_PLAY,
  SET_AUDIO_RUNNING_PAUSE,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_DROPPING,
  SET_AUDIO_CURRENTTIME,
  SET_JUMPTO_AUDIO_CURRENTTIME,
  SET_AUDIO_BUFFERED,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_PATTERN,

  SET_RUNERROR_ADD,
  SET_RUNERROR_DESC,
} from './actionTypes';

const resetState = {
  errorCount: 0,
  song: {},
  running: false,
  dropping: false,
  currentSong: {},
  playlist: [],
  history: [],
  currentTime: 0,
  jumpTime: null,
  buffered: 0,
  lyric: {},
  lrcList: [],
};

const initialState = {
  ...resetState,
  pattern: LOCALSTORAGE('pattern', 0),
  currentSong: LOCALSTORAGE('currentSong', {}),
  playlist: LOCALSTORAGE('playlist', []),
  history: LOCALSTORAGE('history', []),
  currentTime: LOCALSTORAGE('currentTime', 0),
};

// 切歌通用
const FnChange = (draft) => {
  window.localStorage.setItem('currentTime', 0);
  draft.currentTime = 0;
  draft.buffered = 0;
  draft.running = true;
};

const FnAddNext = (draft, currentSong) => {
  if (draft.playlist.every((song) => song.id !== currentSong.id)) { // 未在歌单中的新歌
    const beforeIndex = draft.playlist.findIndex((item) => item.id === draft.currentSong.id);
    draft.playlist.splice(beforeIndex + 1, 0, currentSong);
    window.localStorage.setItem('playlist', JSON.stringify(draft.playlist));
  }
};

const FnAddHistory = (draft, currentSong) => {
  if (draft.history.some((song) => song.id === currentSong.id)) {
    const historyIndex = draft.history.findIndex((song) => song.id === currentSong.id);
    draft.history.splice(historyIndex, 1);
    // draft.history = draft.history.filter((history) => history.id !== currentSong.id)
  }
  draft.history.unshift(currentSong);
  window.localStorage.setItem('history', JSON.stringify(draft.history));
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_SONG:
      draft.song = action.payload.song;
      break;
    case SET_AUDIO_IMMEDIATE:
      {
        const { currentSong } = action.payload;
        FnChange(draft);
        FnAddNext(draft, currentSong);
        FnAddHistory(draft, currentSong);
        // draft.history = [currentSong, ...draft.history.filter((history) => history.id !== currentSong.id)];
        draft.currentSong = currentSong;
        // draft.currentTime = 0;
        window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
      }
      break;
    case SET_AUDIO_IMMEDIATE_NEXT:
      {
        const { currentSong } = action.payload;
        FnAddNext(draft, currentSong);
      }
      break;
    case SET_AUDIO_PLAYLIST:
      {
        FnChange(draft);
        const { playlist } = action.payload;
        const currentSong = playlist[0];
        window.localStorage.setItem('playlist', JSON.stringify(playlist));
        draft.playlist = playlist;
        draft.currentSong = currentSong;
        FnAddHistory(draft, currentSong);
        // draft.history = [currentSong, ...draft.history.filter((history) => history.id !== currentSong.id)];
        window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
        window.localStorage.setItem('history', JSON.stringify(draft.history));
      }
      break;
    case SET_AUDIO_PLAYLIST_ADD:

      break;
    case SET_AUDIO_PREV:
      if (draft.playlist.length === 0) return;
      {
        FnChange(draft);
        const len = draft.playlist.length;
        const currentIndex = draft.playlist.findIndex((item) => item.id === draft.currentSong.id);
        const currentSong = draft.playlist[(currentIndex + len - 1) % len];
        draft.currentSong = currentSong;
        FnAddHistory(draft, currentSong);
        window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
      }
      break;
    case SET_AUDIO_NEXT:
      if (draft.playlist.length === 0) return;
      {
        FnChange(draft);
        const len = draft.playlist.length;
        // draft.currentSong = currentSong;
        const currentIndex = draft.playlist.findIndex((item) => item.id === draft.currentSong.id);
        const currentSong = draft.playlist[(currentIndex + 1) % len];
        draft.currentSong = currentSong;
        FnAddHistory(draft, currentSong);
        window.localStorage.setItem('currentSong', JSON.stringify(currentSong));
        // if (currentIndex === draft.playlist.length - 1) {
        //   draft.running = false;
        //   draft.currentSong = {};
        // } else {
        //   draft.currentSong = draft.playlist[currentIndex + 1];
        // }
        // switch (draft.pattern) {
        //   case '0':
        //     if (currentIndex === draft.playlist.length - 1) {
        //       draft.running = false;
        //       draft.currentSong = {};
        //     } else {
        //       draft.currentSong = draft.playlist[currentIndex + 1];
        //     }
        //     break;
        //   default:
        //     break;
        // }
      }
      break;
    case SET_AUDIO_RUNNING:
      draft.running = action.payload.running;
      break;
    case SET_AUDIO_RUNNING_PLAY:
      draft.running = true;
      break;
    case SET_AUDIO_RUNNING_PAUSE:
      draft.running = false;
      break;
    case SET_AUDIO_RUNNING_TOGGLE:
      draft.running = !draft.running;
      break;
    case SET_AUDIO_DROPPING:
      draft.dropping = action.payload.dropping;
      break;
    case SET_AUDIO_CURRENTTIME:
      window.localStorage.setItem('currentTime', JSON.stringify(Number(action.payload)));
      draft.currentTime = action.payload;
      break;
    case SET_JUMPTO_AUDIO_CURRENTTIME:
      window.localStorage.setItem('currentTime', JSON.stringify(Number(action.payload)));
      draft.jumpTime = action.payload;
      break;
    case SET_AUDIO_BUFFERED:
      draft.buffered = action.payload;
      break;
    case SET_RUNERROR_ADD:
      draft.errorCount += 1;
      break;
    case SET_RUNERROR_DESC:
      draft.errorCount -= 1;
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
    default:
  }
}, initialState);
