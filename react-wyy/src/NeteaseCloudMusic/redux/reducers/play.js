import {} from "react-redux";
import { ADD_COUNT, GET_VIDEO_GROUP_LIST } from "../actionTypes";

const initialState = {
  count: 0,
  curr_check: "全部视频",
  group_list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case GET_VIDEO_GROUP_LIST:
      return {
        ...state,
        group_list: action.payload.list
      };
    default:
      return state;
  }
};
