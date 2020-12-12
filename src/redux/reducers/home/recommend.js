import { SET_HOME_RECOMMEND } from '@/redux/actionTypes';

const initialState = {
  banners: [],
  playlist: [],
  privatecontent: [],
  newsong: [],
  mv: [],
  djprogram: [],
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
