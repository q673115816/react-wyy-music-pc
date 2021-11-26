import { createSlice } from "@reduxjs/toolkit";
import { LOCALSTORAGE } from "@/common/utils";

interface VolumeState {
  volume: number;
  beforeMuted: number;
}

const initialState: VolumeState = {
  volume: LOCALSTORAGE("volume", 100),
  beforeMuted: LOCALSTORAGE("beforeMuted", 10),
};

const slice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    setVolume(state, action) {
      let volume = action.payload;
      if (volume > 100) volume = 100;
      if (volume < 0) volume = 0;
      window.localStorage.setItem("volume", JSON.stringify(volume));
      state.volume = volume;
    },
    setVolumePlusTen(state) {
      const newVolume = state.volume >= 90 ? 100 : state.volume + 10;
      window.localStorage.setItem("volume", JSON.stringify(newVolume));
      state.volume = newVolume;
    },
    setVolumeSubTen(state) {
      const newVolume = state.volume <= 10 ? 0 : state.volume - 10;
      window.localStorage.setItem("volume", JSON.stringify(newVolume));
      state.volume = newVolume;
    },
    setBeforeMuted(state, action) {
      window.localStorage.setItem(
        "beforeMuted",
        JSON.stringify(action.payload)
      );
      state.beforeMuted = action.payload;
    },
  },
});

export default slice.reducer;

export const { setVolume, setVolumePlusTen, setVolumeSubTen, setBeforeMuted } =
  slice.actions;
