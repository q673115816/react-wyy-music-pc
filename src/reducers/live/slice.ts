import {createSlice} from "@reduxjs/toolkit";

interface LiveState {
  status: {
    [key: string]: boolean
  }
}

const initialState: LiveState = {
  status: {
    user: false,
    deskTop: false,
    push: false,
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
    pushOpen(state) {
      state.status.push = true
    },
    pushClose(state) {
      state.status.push = false
    },
  }
})

export default slice.reducer

export const liveSelector = ({live}: {live: LiveState}) => live

export const {
  deskTopOpen,
  deskTopClose,
  userOpen,
  userClose,
  pushOpen,
  pushClose,
} = slice.actions
