import { DIALOG_LOGIN_VISIBILTY } from "../actionTypes";

const initialState = {
  dialog_login_visibility: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_LOGIN_VISIBILTY:
      return {
        ...state,
        dialog_login_visibility: !state.dialog_login_visibility
      };
    default:
      return state;
  }
};
