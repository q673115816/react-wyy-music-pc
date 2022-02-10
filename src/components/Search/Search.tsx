import React, { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/modules/hooks";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  setSearchValue,
  setSearchHot,
  setSearchSuggest,
} from "@/modules/reducers/search/slice";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import Mask from "../Mask";
import History from "./History";
import Hot from "./Hot";
import style from "./style.module.scss";

const Search = () => {
  const dispatch = useAppDispatch();
  const { searchValue, searchHot, searchSuggest } = useAppSelector(
    ({ search }) => search
  );
  const { searchVisibility } = useAppSelector(({ mask }) => mask);
  const handleSearch = (keywords: string) => {
    dispatch(setDialogReset());
    dispatch(setSearchValue({ searchValue: keywords }));
    // push(`/search?keywords=${keywords}`);
  };
  if (!searchVisibility) return null;

  return (
    <Mask>
      <div
        className={classNames(
          style.box,
          "absolute shadow rounded bg-white py-2 z-10"
        )}
      >
        {searchValue ? (
          <div
            className={classNames(
              style.box_Value,
              "overflow-auto h-full flex-auto"
            )}
          >
            <Link
              to={`/search/${searchValue}`}
              onClick={() => handleSearch(searchValue)}
            >
              搜索&quot;
              <span className="ui_link">{searchValue}</span>
              &quot;相关的结果&gt;
            </Link>
            {searchSuggest?.order?.map((order) => (
              <div key={order}>
                {searchSuggest[order].map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={classNames(
              style.box_noValue,
              "overflow-auto h-full flex-auto"
            )}
          >
            <History handleSearch={handleSearch} />
            <div className="subtitle px-5 py-3 text-sm text-gray-400">
              热搜榜
            </div>
            <Hot list={searchHot} handleSearch={handleSearch} />
          </div>
        )}
      </div>
    </Mask>
  );
};

export default memo(Search);
