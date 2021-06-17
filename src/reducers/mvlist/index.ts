import produce from 'immer';
import {
  SET_MVLIST_INIT,
  SET_MVLIST_TOPAREA_INIT,
  SET_MVLIST_FIRSTAREA_INIT,
} from './actionTypes';

const initialState = {
  firstArea: '内地',
  topArea: '内地',
  first: [],
  hot: [],
  wy: [],
  top: [],
  timestamp: 0,
};

export default produce((draft, action) => {
  switch (action.type) {
    case SET_MVLIST_INIT:
      {
        const {
          timestamp,
          first,
          hot,
          wy,
          top,
        } = action.payload;
        draft.timestamp = timestamp;
        draft.first = first;
        draft.hot = hot;
        draft.wy = wy;
        draft.top = top;
      }
      break;

    // return {
    //   ...state,
    //   ...action.payload,
    // };
    case SET_MVLIST_TOPAREA_INIT:
      {
        const {
          topArea,
          top,
        } = action.payload;
        draft.topArea = topArea;
        draft.top = top;
      }
      break;
    // return {
    //   ...state,
    //   ...action.payload,
    // };
    case SET_MVLIST_FIRSTAREA_INIT:
      {
        const {
          firstArea,
          first,
        } = action.payload;
        draft.firstArea = firstArea;
        draft.first = first;
      }
      break;

    // draft = { ...draft, ...action.payload };
    // return {
    //   ...state,
    //   ...action.payload,
    // };
    default:
      break;
  }
}, initialState);
