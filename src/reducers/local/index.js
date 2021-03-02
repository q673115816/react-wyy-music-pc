import { SET_LOCAL_CURRENT } from './actionTypes';

const initialState = {
  current: '歌曲',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCAL_CURRENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
