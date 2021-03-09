// import produce from 'immer';
import { SET_EXCLUSIVE_RESULT_ADD, SET_EXCLUSIVE_RESULT_EMPTY, SET_EXCLUSIVE_SCROLLTOP } from './actionTypes';

const initialState = {
  result: [],
  scrollTop: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXCLUSIVE_RESULT_ADD:
      return {
        ...state,
        result: [...state.result, ...action.payload.result],
      };
    case SET_EXCLUSIVE_RESULT_EMPTY:
      return {
        ...state,
        result: [],
      };
    case SET_EXCLUSIVE_SCROLLTOP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
