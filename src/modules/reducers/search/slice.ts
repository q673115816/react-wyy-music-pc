import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  searchValue: string;
  searchHot: [];
  searchSuggest: [];
  count: number;
}

const initialState: SearchState = {
  searchValue: "",
  searchHot: [],
  searchSuggest: [],
  count: 0,
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      Object.assign(state, payload);
    },
    setSearchHot(state, { payload }) {
      Object.assign(state, payload);
    },
    setSearchSuggest(state, { payload }) {
      Object.assign(state, payload);
    },
    setSearchCount(state, { payload }) {
      state.count = payload.count;
    },
  },
});

export const searchSelector = ({ search }) => search;

export default slice.reducer;

export const {
  setSearchValue,
  setSearchHot,
  setSearchSuggest,
  setSearchCount,
} = slice.actions;
