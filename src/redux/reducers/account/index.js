import { SET_LOGIN_INFO } from '@/redux/actionTypes';

const initialState = {
  profile: {},
  playlist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
