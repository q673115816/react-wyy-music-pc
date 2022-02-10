import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  searchValue: string;
  searchHot: [];
  searchSuggest: [];
}

const initialState: SearchState = {
  searchValue: "",
  searchHot: [],
  searchSuggest: [],
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
  },
});

export default slice.reducer;

export const { setSearchValue, setSearchHot, setSearchSuggest } = slice.actions;
