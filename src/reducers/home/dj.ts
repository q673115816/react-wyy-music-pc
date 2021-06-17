import { SET_HOME_DJ } from './actionTypes';

const initialState = {
  DjBanner: [],
  category: [],
  catelist: [],
  DjPersonalizeRecommend: [],
  result: {
    创作翻唱: [],
    声之剧场: [],
    音乐故事: [],
    情感调频: [],
    声音恋人: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_DJ:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
