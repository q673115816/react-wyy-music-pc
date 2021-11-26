import { createSlice } from "@reduxjs/toolkit";

export interface LocalState {
  current: string;
}

const initialState: LocalState = {
  current: "歌曲",
};

const slice = createSlice({
  name: "local",
  initialState,
  reducers: {
    setLocalCurrent(state, action) {
      state.current = action.payload.current;
    },
  },
});

export default slice.reducer;

export const { setLocalCurrent } = slice.actions;
