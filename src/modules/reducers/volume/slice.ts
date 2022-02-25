import { createSlice } from "@reduxjs/toolkit";

interface VolumeState {
  volume: number;
  beforeMuted: number;
}

const initialState: VolumeState = {
  volume: 100,
  beforeMuted: 10,
};

const slice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    setVolume(state, action) {
      let volume = action.payload;
      if (volume > 100) volume = 100;
      if (volume < 0) volume = 0;
      state.volume = volume;
    },
    setVolumePlusTen(state) {
      const newVolume = state.volume >= 90 ? 100 : state.volume + 10;
      state.volume = newVolume;
    },
    setVolumeSubTen(state) {
      const newVolume = state.volume <= 10 ? 0 : state.volume - 10;
      state.volume = newVolume;
    },
    setBeforeMuted(state, action) {
      state.beforeMuted = action.payload;
    },
  },
});

export default slice.reducer;

export const { setVolume, setVolumePlusTen, setVolumeSubTen, setBeforeMuted } =
  slice.actions;
