import { SET_USER_DETAIL, SET_USER_RECORD } from '@/redux/actionTypes';

const initialState = {
  profile: {},
  level: 0,
  playlist: [],
  record: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_RECORD:
      return {
        ...state,
        record: action.payload.record,
      };
    default:
      return state;
  }
};
