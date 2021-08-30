import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  status: {
    user: false,
    deskTop: false
  },
}

const slice = createSlice({
  name: 'live',
  initialState,
  reducers: {
    userOpen(state) {
      state.status.user = true
    },
    userClose(state) {
      state.status.user = false
    },
    deskTopOpen(state) {
      state.status.deskTop = true
    },
    deskTopClose(state) {
      state.status.deskTop = false
    },
  }
})

export default slice.reducer

export const liveSelector = ({live}) => live

export const {
  deskTopOpen,
  deskTopClose,
  userOpen,
  userClose,
} = slice.actions
