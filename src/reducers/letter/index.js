import { SET_MSG_PRIVATE_HISTORY } from './actionTypes';

const initialState = {
  nickname: '云音乐小秘书',
  hint: '',
  uid: '9003',
  showMsgPrivateHistory: true,
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
