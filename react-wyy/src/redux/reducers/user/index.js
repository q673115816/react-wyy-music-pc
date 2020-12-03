import { SET_USER_DETAIL } from '@/redux/actionTypes';

const initialState = {
  profile: {},
  level: 0,
  playlist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
