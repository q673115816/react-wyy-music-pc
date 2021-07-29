import {createSlice} from "@reduxjs/toolkit";

interface DragState {
  dragger: boolean,
  onMouseMove: (() => void) | null,
  onMouseUp: (() => void) | null,
}

const initialState: DragState = {
  dragger: false,
  onMouseMove: null,
  onMouseUp: null,
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
