import {
  SET_THEME,
  SET_FONT,
  SET_CUSTOM,
  SET_HOMEORDER,
} from './actionTypes';

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setFont = (payload) => ({
  type: SET_FONT,
  payload,
});

export const setCustom = (payload) => ({
  type: SET_CUSTOM,
  payload,
});

export const setHomeOrder = (payload) => ({
  type: SET_HOMEORDER,
  payload,
});
