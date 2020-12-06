import {} from 'react-redux';
import { ADD_COUNT, SET_PLAY_INIT } from '@/redux/actionTypes';

const initialState = {
  count: 0,
  curr_check: '全部视频',
  VideoGroupList: [],
  VideoCategoryList: [],
  VideoTimelineRecommend: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_PLAY_INIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
