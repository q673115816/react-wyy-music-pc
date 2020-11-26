import { SET_TOP_PLAYLIST, SET_PLAYLIST_CATLIST } from '../../actionTypes';

const initialState = {
  playlists: [],
  all: {},
  sub: [],
  categories: {},
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST_CATLIST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_TOP_PLAYLIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
