import { DIALOG_LOGIN_VISIBILTY, SET_COUNTRIES_CODE_LIST } from '../actionTypes';

const initialState = {
  apiCountriesCodeList: [],
  dialog_login_visibility: false,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES_CODE_LIST:
      return {
        ...state,
        apiCountriesCodeList: action.payload.data,
      };
    case DIALOG_LOGIN_VISIBILTY:
      return {
        ...state,
        dialog_login_visibility: !state.dialog_login_visibility,
      };
    default:
      return state;
  }
};
