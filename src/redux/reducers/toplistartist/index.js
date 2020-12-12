import { SET_TOPLIST_ARITST } from '@/redux/actionTypes';

const initialState = {
  artist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPLIST_ARITST:
      return {
        ...state,
        artist: action.payload.artist,
      };
    default:
      return state;
  }
};
