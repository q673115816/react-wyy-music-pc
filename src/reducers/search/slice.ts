import {createSlice} from "@reduxjs/toolkit";
import {LOCALSTORAGE} from "@/common/utils";

export interface SearchState {
  searchHistory: [],
  searchValue: string,
  searchHot: [],
  searchSuggest: [],
}

const initialState: SearchState = {
  searchHistory: LOCALSTORAGE('searchHistory', []),
  searchValue: '',
  searchHot: [],
  searchSuggest: [],
}

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchHistory(state, action) {

    },
    setSearchValue(state, action) {

    },
    setSearchHot(state, action) {

    },
    setSearchSuggest(state, action) {

    },
  }
})

export default slice.reducer

export const {
  setSearchValue,
  setSearchHistory,
  setSearchHot,
  setSearchSuggest,
} = slice.actions
