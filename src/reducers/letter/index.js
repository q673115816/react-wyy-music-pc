import { SET_MSG_PRIVATE_HISTORY } from './actionTypes';

const initialState = {
  nickname: '',
  hint: '',
  uid: '',
  showMsgPrivateHistory: false,
  privatMsgs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MSG_PRIVATE_HISTORY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
