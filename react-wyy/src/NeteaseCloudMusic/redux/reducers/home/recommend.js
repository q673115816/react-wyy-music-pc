import { GET_HOME_TOPLIST } from "../actionTypes";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_TOPLIST:
      return state;
    default:
      return state;
  }
};
