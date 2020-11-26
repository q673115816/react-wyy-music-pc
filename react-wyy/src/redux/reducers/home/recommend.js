import { SET_HOME_RECOMMEND } from '../../actionTypes';

const initialState = {
  privatecontent: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_RECOMMEND:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
