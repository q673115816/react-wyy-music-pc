import {
  SET_FULL,
  SET_PLAY,
  SET_BUFFERED,
  SET_DURATION,
  SET_CURRENTTIME,
  SET_JUMPTIME,
} from "./actionTypes";

export const createAction = (type: string, key: string, value: any) => ({
  type,
  payload: {
    [key]: value,
  },
});

export const actionSetPlay = (value: any) =>
  createAction(SET_PLAY, "play", value);

export const actionSetFull = (value: any) =>
  createAction(SET_FULL, "full", value);

export const actionSetBuffered = (value: any) =>
  createAction(SET_BUFFERED, "buffered", value);

export const actionSetCurrentTime = (value: any) =>
  createAction(SET_CURRENTTIME, "currentTime", value);

export const actionSetJumpTime = (value: any) =>
  createAction(SET_JUMPTIME, "jumpTime", value);

export const actionSetDuration = (value: any) =>
  createAction(SET_DURATION, "duration", value);
