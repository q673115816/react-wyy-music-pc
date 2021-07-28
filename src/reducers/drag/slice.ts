import {createSlice} from "@reduxjs/toolkit";

interface DragState {
  dragger: boolean,
  onMouseMove: () => void,
  onMouseUp: () => void,
}

const initialState: DragState = {
  dragger: false,
  onMouseMove: () => {

  },
  onMouseUp: () => {

  },
}

const slice = createSlice({
  name: 'drag',
  initialState,
  reducers: {
    setDragInit(state, action) {
      state.dragger = action.payload.dragger
      state.onMouseMove = action.payload.onMouseMove
      state.onMouseUp = action.payload.onMouseUp
    },
    setDragUnload(state) {
      Object.assign(state, initialState)
      // state = initialState
    },
  }
})

export default slice.reducer

export const {
  setDragInit,
  setDragUnload,
} = slice.actions
