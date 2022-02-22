import { createSlice } from "@reduxjs/toolkit";
import { Draft } from "immer";

export interface SearchState {
  keywords: string;
  count: number;
}

const initialState: SearchState = {
  keywords: "",
  count: 0,
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeywords(state, { payload }) {
      Object.assign(state, payload);
    },
    setSearchCount(state, { payload }) {
      state.count = payload.count;
    },
  },
});

export const searchSelector = <T = Draft<SearchState>>({
  search,
}: {
  search: T;
}) => search;

export default slice.reducer;

export const { setKeywords, setSearchCount } = slice.actions;
