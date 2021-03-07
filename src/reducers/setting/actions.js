import {
  SET_THEME,
  SET_FONT,
} from './actionTypes';

export const setTheme = (payload) => ({
  type: SET_THEME,
  payload,
});

export const setFont = (payload) => ({
  type: SET_FONT,
  payload,
});
