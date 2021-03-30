import {
  SET_GLOBAL_INSET,
  SET_GLOBAL_RECT,
  SET_SCREEN_FULL,
  SET_SCREEN_NORMAL,
  SET_POSITION_TRUE,
  SET_POSITION_FALSE,
} from './actionTypes';

export const setGlobalInset = (payload) => ({
  type: SET_GLOBAL_INSET,
  payload,
});

export const setGlobalRect = (payload) => ({
  type: SET_GLOBAL_RECT,
  payload,
});

export const setScreenFull = () => ({
  type: SET_SCREEN_FULL,
});

export const setScreenNormal = () => ({
  type: SET_SCREEN_NORMAL,
});

export const setPositionTrue = () => ({
  type: SET_POSITION_TRUE,
});

export const setPositionFalse = () => ({
  type: SET_POSITION_FALSE,
});
