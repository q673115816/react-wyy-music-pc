import { SET_FRIEND_INIT } from '@/redux/actionTypes';

const initialState = {
  hot: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_INIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
