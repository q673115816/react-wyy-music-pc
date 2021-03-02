import { SET_ARTIST_INIT } from './actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_INIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
