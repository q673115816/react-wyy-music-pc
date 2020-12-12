import {
  INIT_HOME_TOP_ARTISTS,
  ADD_HOME_TOP_ARTISTS,
} from '@/redux/actionTypes';

const initialState = {
  artists: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_HOME_TOP_ARTISTS:
      return {
        ...state,
        artists: [],
      };
    case ADD_HOME_TOP_ARTISTS:
      console.log(payload);
      return {
        ...state,
        artists: [].concat(state.artists, payload.artists),
      };
    default:
      return state;
  }
};
