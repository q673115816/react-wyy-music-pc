import {
  SET_THEME,
  SET_VOLUME,
  SET_FONT,
} from './actionTypes';

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  payload,
});

export const setFont = (payload) => ({
  type: SET_FONT,
  payload,
});
