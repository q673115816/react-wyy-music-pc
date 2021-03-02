import {
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_CURRENTTIME,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_PATTERN,
} from './actionTypes';

export const setAudioImmediate = (payload) => ({
  type: SET_AUDIO_IMMEDIATE,
  payload,
});

export const setAudioRunningToggle = () => ({
  type: SET_AUDIO_RUNNING_TOGGLE,
});

export const setAudioCurrentTime = (payload) => ({
  type: SET_AUDIO_CURRENTTIME,
  payload,
});

export const setAudioPlaylistClear = () => ({
  type: SET_AUDIO_PLAYLIST_CLEAR,
});

export const setAudioHistoryClear = () => ({
  type: SET_AUDIO_HISTORY_CLEAR,
});

export const setAudioPattern = () => ({
  type: SET_AUDIO_PATTERN,
});
