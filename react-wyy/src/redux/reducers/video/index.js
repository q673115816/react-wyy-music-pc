import {} from 'react-redux';
import { ADD_COUNT, SET_VIDEO_INIT, ADD_VIDEO_GROUP_LIST } from '@/redux/actionTypes';

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
    case SET_VIDEO_INIT:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_VIDEO_GROUP_LIST:
      return {
        ...state,
        VideoTimelineRecommend: [...state.VideoTimelineRecommend, ...action.payload],
      };
    default:
      return state;
  }
};
