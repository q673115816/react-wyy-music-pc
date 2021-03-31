import {
  SET_VOLUME,
  SET_VOLUME_PLUS_TEN,
  SET_VOLUME_SUB_TEN,
  SET_BEFORE_MUTED,
} from './actionTypes';

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
