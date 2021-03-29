import {
  SET_AUDIO_IMMEDIATE,
  SET_AUDIO_PREV,
  SET_AUDIO_NEXT,
  SET_AUDIO_CURRENT,
  SET_AUDIO_RUNNING,
  SET_AUDIO_RUNNING_TOGGLE,
  SET_AUDIO_DROPPING,
  SET_AUDIO_CURRENTTIME,
  SET_JUMPTO_AUDIO_CURRENTTIME,
  SET_AUDIO_BUFFERED,
  SET_AUDIO_PLAYLIST_CLEAR,
  SET_AUDIO_HISTORY_CLEAR,
  SET_AUDIO_PATTERN,
  SET_VOLUME,
  SET_BEFORE_MUTED,
  SET_VOLUME_PLUS_TEN,
  SET_VOLUME_SUB_TEN,
  SET_LYRIC_TEXT,
} from './actionTypes';

export const setAudioImmediate = (payload) => ({
  type: SET_AUDIO_IMMEDIATE,
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

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  payload,
});

export const setVolumePlusTen = () => ({
  type: SET_VOLUME_PLUS_TEN,
});

export const setVolumeSubTen = () => ({
  type: SET_VOLUME_SUB_TEN,
});

export const setBeforeMuted = (payload) => ({
  type: SET_BEFORE_MUTED,
  payload,
});

export const setLyricText = (payload) => ({
  type: SET_LYRIC_TEXT,
  payload,
});
