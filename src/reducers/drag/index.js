import { SET_DRAG_INIT, SET_DRAG_UNLOAD } from './actionTypes';

const initialState = {
  dragger: false,
  onMouseMove: null,
  onMouseUp: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAG_INIT:
      return {
        dragger: true,
        onMouseMove: action.payload.onMouseMove,
        onMouseUp: action.payload.onMouseUp,
      };
    case SET_DRAG_UNLOAD:
      return initialState;
    default:
      return state;
  }
};
