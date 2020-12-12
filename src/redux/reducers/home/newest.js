import { SET_TOP_SONG, SET_TOP_ALBUM } from '@/redux/actionTypes';

const initialState = {
  data: [],
  monthData: [],
  weekData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_SONG:
      return {
        ...state,
        data: action.payload.data,
      };
    case SET_TOP_ALBUM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
