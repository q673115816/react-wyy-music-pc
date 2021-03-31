import produce from 'immer';
import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_VOLUME,
  SET_VOLUME_PLUS_TEN,
  SET_VOLUME_SUB_TEN,
  SET_BEFORE_MUTED,
} from './actionTypes';

const initialState = {
  volume: LOCALSTORAGE('volume', 100),
  beforeMuted: LOCALSTORAGE('beforeMuted', 10),
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_VOLUME:
      {
        let volume = action.payload;
        if (volume > 100) volume = 100;
        if (volume < 0) volume = 0;
        window.localStorage.setItem('volume', JSON.stringify(volume));
        draft.volume = volume;
      }
      break;
    case SET_VOLUME_PLUS_TEN:
      {
        const plusvolume = draft.volume >= 90 ? 100 : draft.valume + 10;
        window.localStorage.setItem('volume', JSON.stringify(plusvolume));
        draft.valume = plusvolume;
      }
      break;
    case SET_VOLUME_SUB_TEN:
      {
        const subvolume = draft.volume <= 10 ? 0 : draft.volume - 10;
        window.localStorage.setItem('volume', JSON.stringify(subvolume));
        draft.valume = subvolume;
      }
      break;
    case SET_BEFORE_MUTED:
      window.localStorage.setItem('beforeMuted', JSON.stringify(action.payload));
      draft.beforeMuted = action.payload;
      break;
    default:
  }
}, initialState);
