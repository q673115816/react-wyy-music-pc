import { DIALOG_LOGIN_VISIBILTY, GET_COUNTRIES_CODE_LIST } from "../actionTypes";

const initialState = {
  countries_code_list: [],
  dialog_login_visibility: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_CODE_LIST:
      return {
        ...state,
        countries_code_list: action.payload.data
      }
    case DIALOG_LOGIN_VISIBILTY:
      return {
        ...state,
        dialog_login_visibility: !state.dialog_login_visibility
      };
    default:
      return state;
  }
};
