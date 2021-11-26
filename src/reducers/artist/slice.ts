import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArtistState {
  layout: string;
}

type Action = PayloadAction<ArtistState>;

const initialState: ArtistState = {
  layout: "column",
};

const slice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtistLayout(state, action: Action) {
      state.layout = action.payload.layout;
    },
  },
});
export default slice.reducer;

export const { setArtistLayout } = slice.actions;
