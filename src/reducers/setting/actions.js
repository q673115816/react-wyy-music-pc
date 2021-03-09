import {
  SET_THEME,
  SET_FONT,
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

export const setHomeOrder = (payload) => ({
  type: SET_HOMEORDER,
  payload,
});
