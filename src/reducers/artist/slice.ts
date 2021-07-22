import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ArtistState {
  layout: string
}

type Action = PayloadAction<ArtistState>

const initialState: ArtistState = {
  layout: 'column',
}

export default createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtistLayout(state, action: Action) {
      state.layout = action.payload.layout
    }
  }
})
