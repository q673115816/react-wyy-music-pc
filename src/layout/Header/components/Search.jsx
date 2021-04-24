import React, { useEffect, memo } from 'react';
import { IconSearch } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiSearchHotDetail,
  apiSearchSuggest,
} from '@/api';

import {
  setSearchValue,
  setSearchHistory,
  setSearchHot,
  setSearchSuggest,
} from '@/reducers/search/actions';
import { setSearchShow, setDialogReset } from '@/reducers/mask/actions';
import { useHistory } from 'react-router-dom';

export default memo(() => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    searchHistory,
    searchValue,
  } = useSelector(({ search }) => search);
  const handleSearchInit = async () => {
    try {
      const { data } = await apiSearchHotDetail();
      // setSearchHot(data);
      dispatch(setSearchHot({
        searchHot: data,
      }));
      dispatch(setSearchShow());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchSuggestInit = async () => {
    try {
      const { result } = await apiSearchSuggest({
        keywords: searchValue,
      });
      setSearchSuggest(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchValue({ searchValue: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      push(`/search/${searchValue}`);
      dispatch(setDialogReset());// temp
    }
    return false;
  };

  useEffect(() => {
    if (searchValue) {
      handleSearchSuggestInit();
    }
  }, [searchValue]);
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <IconSearch size={16} className="absolute inset-y-0 m-auto left-3 text-white" />
      <input
        type="text"
        placeholder="搜索"
        className="domHeader_search placeholder-white placeholder-opacity-40 rounded-full bg-black bg-opacity-5 text-white"
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={handleSearchInit}
      />
    </form>
  );
});
