import React, { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/reducers/hooks";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  setSearchValue,
  setSearchHistory,
  setSearchHot,
  setSearchSuggest,
} from "@/reducers/search/slice";
import { setDialogReset } from "@/reducers/mask/slice";
import Mask from "../Mask";
import History from "./History";
import HotList from "./HotList";

export default memo(() => {
  const dispatch = useAppDispatch();
  const { searchValue, searchHot, searchSuggest, searchHistory } =
    useAppSelector(({ search }) => search);
  const { searchVisibility } = useAppSelector(({ mask }) => mask);
  const handleSearch = (keywords: string) => {
    // setSearchVisibility(false);
    dispatch(setDialogReset());
    dispatch(setSearchValue({ searchValue: keywords }));
    dispatch(
      setSearchHistory([
        keywords,
        ...searchHistory.filter((search: string) => search !== keywords),
      ])
    );
    // push(`/search?keywords=${keywords}`);
  };
  if (!searchVisibility) return null;

  return (
    <Mask>
      <div className="absolute domHeader_search_box shadow rounded bg-white py-2 z-10">
        {searchValue ? (
          <div className="domHeader_search_box_value overflow-auto h-full flex-auto">
            <Link
              to={`/search/${searchValue}`}
              onClick={() => handleSearch(searchValue)}
            >
              搜索&quot;
              <span className="ui_link">{searchValue}</span>
              &quot;相关的结果&gt;
            </Link>
            {searchSuggest?.order?.map((order, index) => (
              <div key={order}>
                {searchSuggest[order].map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="domHeader_search_box_noValue overflow-auto h-full flex-auto">
            {searchHistory.length > 0 && (
              <History handleSearch={handleSearch} />
            )}
            <div className="subtitle px-5 py-3 text-sm text-gray-400">
              热搜榜
            </div>
            <HotList list={searchHot} handleSearch={handleSearch} />
          </div>
        )}
      </div>
    </Mask>
  );
});
