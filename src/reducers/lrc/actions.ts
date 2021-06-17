import {
  SET_LYRIC_TEXT,
  SET_GLOBAL_LRC_TOGGLE,
  SET_GLOBAL_LRC_SHOW,
  SET_GLOBAL_LRC_HIDE,
  SET_LYRIC_SHOW,
  SET_LYRIC_HIDE,
  SET_LYRIC_TOGGLE,
} from './actionTypes';

export const setLyricText = (payload) => ({
  type: SET_LYRIC_TEXT,
  payload,
});

export const setGlobalLrcToggle = () => ({
  type: SET_GLOBAL_LRC_TOGGLE,
});

export const setGlobalLrcShow = () => ({
  type: SET_GLOBAL_LRC_SHOW,
});

export const setGlobalLrcHide = () => ({
  type: SET_GLOBAL_LRC_HIDE,
});

export const setLyricShow = () => ({
  type: SET_LYRIC_SHOW,
});

export const setLyricHide = () => ({
  type: SET_LYRIC_HIDE,
});

export const setLyricToggle = () => ({
  type: SET_LYRIC_TOGGLE,
});
