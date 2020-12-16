import {} from 'react-redux';
import { ADD_COUNT, SET_VIDEO_INIT, ADD_VIDEO_GROUP_LIST } from '@/redux/actionTypes';

const initialState = {
  count: 0,
  VideoGroupList: [],
  VideoCategoryList: [],
  VideoList: [],
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
        VideoList: [...state.VideoList, ...action.payload],
      };
    default:
      return state;
  }
};
