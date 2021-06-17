import { LOCALSTORAGE } from '@/common/utils';
import {
  SET_SEARCH_HISTORY, SET_SEARCH_VALUE, SET_SEARCH_HOT, SET_SEARCH_SUGGEST,
} from './actionTypes';

const initialState = {
  searchHistory: LOCALSTORAGE('searchHistory', []),
  searchValue: '',
  searchHot: [],
  searchSuggest: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_HOT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_SUGGEST:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_HISTORY:
      window.localStorage.setItem('searchHistory', JSON.stringify(action.payload));
      return {
        ...state,
        searchHistory: action.payload,
      };
    default:
      return state;
  }
};
