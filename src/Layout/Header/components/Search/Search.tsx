import React, {
  useEffect,
  memo,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { IconSearch } from "@tabler/icons";
import { apiSearchHotDetail, apiSearchSuggest } from "@/api";

import {
  setSearchValue,
  setSearchHistory,
  setSearchHot,
  setSearchSuggest,
} from "@/modules/reducers/search/slice";
import { setSearchShow, setDialogReset } from "@/modules/reducers/mask/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchHistory, searchValue } = useAppSelector(({ search }) => search);
  const handleSearchInit = async () => {
    try {
      const { data } = await apiSearchHotDetail();
      // setSearchHot(data);
      dispatch(
        setSearchHot({
          searchHot: data,
        })
      );
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
      dispatch(setSearchSuggest(result));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchValue = e.target.value;
    // if (searchValue) handleSearchSuggestInit();
    dispatch(setSearchValue({ searchValue }));
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`);
      dispatch(setDialogReset()); // temp
    }
    return false;
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <IconSearch
        size={16}
        className="absolute inset-y-0 m-auto left-3 text-white"
      />
      <input
        type="text"
        placeholder="搜索"
        className="domHeader_search h-7 w-40 pl-9 placeholder-white placeholder-opacity-40 rounded-full bg-black bg-opacity-5 text-white"
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={handleSearchInit}
      />
    </form>
  );
};

export default memo(Search);
