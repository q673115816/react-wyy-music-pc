import {
  SET_SONG,
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_IMMEDIATE_NEXT,
  SET_AUDIO_PLAYLIST,
  SET_AUDIO_PLAYLIST_ADD,
  SET_AUDIO_PREV,
  SET_AUDIO_NEXT,
  SET_AUDIO_CURRENT,
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
  SET_LYRIC_TEXT,

  SET_RUNERROR_ADD,
  SET_RUNERROR_DESC,
} from './actionTypes';

export const setSong = (payload) => ({
  type: SET_SONG,
  payload,
});

export const setAudioImmediate = (payload) => ({
  type: SET_AUDIO_IMMEDIATE,
  payload,
});

export const setAudioImmediateNext = (payload) => ({
  type: SET_AUDIO_IMMEDIATE_NEXT,
  payload,
});

export const setAudioPlaylist = (payload) => ({
  type: SET_AUDIO_PLAYLIST,
  payload,
});

export const setAudioPlaylistAdd = (payload) => ({
  type: SET_AUDIO_PLAYLIST_ADD,
  payload,
});

export const setAudioPrev = (payload) => ({
  type: SET_AUDIO_PREV,
  payload,
});

export const setAudioNext = (payload) => ({
  type: SET_AUDIO_NEXT,
  payload,
});

export const setAudioCurrent = (payload) => ({
  type: SET_AUDIO_CURRENT,
  payload,
});

export const setAudioRunning = (payload) => ({
  type: SET_AUDIO_RUNNING,
  payload,
});

export const setAudioRunningPlay = () => ({
  type: SET_AUDIO_RUNNING_PLAY,
});

export const setAudioRunningPause = () => ({
  type: SET_AUDIO_RUNNING_PAUSE,
});

export const setAudioRunningToggle = () => ({
  type: SET_AUDIO_RUNNING_TOGGLE,
});

export const setAudioDropping = (payload) => ({
  type: SET_AUDIO_DROPPING,
  payload,
});

export const setAudioCurrentTime = (payload) => ({
  type: SET_AUDIO_CURRENTTIME,
  payload,
});

export const setJumpToAudioCurrentTime = (payload) => ({
  type: SET_JUMPTO_AUDIO_CURRENTTIME,
  payload,
});

export const setAudioBuffered = (payload) => ({
  type: SET_AUDIO_BUFFERED,
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

export const setLyricText = (payload) => ({
  type: SET_LYRIC_TEXT,
  payload,
});

export const setRunErrorAdd = () => ({
  type: SET_RUNERROR_ADD,
});

export const setRunErrorDesc = () => ({
  type: SET_RUNERROR_DESC,
});
