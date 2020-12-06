import { SET_PLAYLIST_DETAIL } from '@/redux/actionTypes';

const initialState = {
  playlist: [],
  privileges: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST_DETAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
