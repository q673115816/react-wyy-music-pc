import {
  SET_FULL,
  SET_PLAY,
  SET_BUFFERED,
  SET_DURATION,
  SET_CURRENTTIME,
} from './actionTypes';

export const createAction = (type, key, value) => ({
  type,
  payload: {
    [key]: value,
  },
});

export const actionSetPlay = (value) => createAction(SET_PLAY, 'play', value);

export const actionSetFull = (value) => createAction(SET_FULL, 'full', value);

export const actionSetBuffered = (value) => createAction(SET_BUFFERED, 'buffered', value);

export const actionSetCurrentTime = (value) => createAction(SET_CURRENTTIME, 'currentTime', value);

export const actionSetDuration = (value) => createAction(SET_DURATION, 'duration', value);
