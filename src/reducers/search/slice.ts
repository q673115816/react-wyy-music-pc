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
    setSearchHistory(state, {payload}) {
      window.localStorage.setItem('searchHistory', JSON.stringify(payload));
      state.searchHistory = payload
    },
    setSearchValue(state, {payload}) {
      Object.assign(state, payload)
    },
    setSearchHot(state, {payload}) {
      Object.assign(state, payload)
    },
    setSearchSuggest(state,  {payload}) {
      Object.assign(state, payload)
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
