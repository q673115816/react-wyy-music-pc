import { SET_VIDEODETAIL_RELATED } from '@/redux/actionTypes';

const initialState = {
  related: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEODETAIL_RELATED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
