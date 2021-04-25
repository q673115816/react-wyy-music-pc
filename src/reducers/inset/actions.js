import {
  SET_GLOBAL_INSET,
  SET_GLOBAL_START_INSET,
  SET_GLOBAL_DRAGGER,
  SET_GLOBAL_RESIZER,
  SET_GLOBAL_START_RECT,
  SET_GLOBAL_RECT,
  SET_SCREEN_FULL,
  SET_SCREEN_NORMAL,
  SET_POSITION_TRUE,
  SET_POSITION_FALSE,
  SET_GLOBAL_LRC_INSET,
  SET_GLOBAL_LRC_START_INSET,

} from './actionTypes';

export const setGlobalInset = (payload) => ({
  type: SET_GLOBAL_INSET,
  payload,
});

export const setGlobalStartInset = (payload) => ({
  type: SET_GLOBAL_START_INSET,
  payload,
});

export const setGlobalDragger = (payload) => ({
  type: SET_GLOBAL_DRAGGER,
  payload,
});

export const setGlobalResizer = (payload) => ({
  type: SET_GLOBAL_RESIZER,
  payload,
});

export const setGlobalStartRect = (payload) => ({
  type: SET_GLOBAL_START_RECT,
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

export const setGlobalLrcInset = (payload) => ({
  type: SET_GLOBAL_LRC_INSET,
  payload,
});

export const setGlobalLrcStartInset = (payload) => ({
  type: SET_GLOBAL_LRC_START_INSET,
  payload,
});
