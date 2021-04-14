import { SET_ARTIST_LAYOUT } from './actionTypes';

const initialState = {
  layout: 'column',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_LAYOUT:
      return {
        layout: action.payload.layout,
      };
    default:
      return state;
  }
};
