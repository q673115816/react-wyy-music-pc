import {
  SET_SEARCH_HISTORY, SET_SEARCH_VALUE, SET_SEARCH_HOT, SET_SEARCH_SUGGEST,
} from './actionTypes';

export const setSearchHistory = (payload) => ({
  type: SET_SEARCH_HISTORY,
  payload,
});

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});
export const setSearchHot = (payload) => ({
  type: SET_SEARCH_HOT,
  payload,
});
export const setSearchSuggest = (payload) => ({
  type: SET_SEARCH_SUGGEST,
  payload,
});
