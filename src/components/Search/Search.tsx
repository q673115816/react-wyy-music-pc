import React, { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/modules/hooks";
import classNames from "classnames";
import { searchSelector, setKeywords } from "@/modules/reducers/search/slice";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import Mask from "../Mask";
import History from "./History";
import Hot from "./Hot";
import style from "./style.module.scss";
import Suggest from "./Suggest";

const Search = () => {
  const dispatch = useAppDispatch();
  const { keywords } = useAppSelector(searchSelector);
  const { searchVisibility } = useAppSelector(({ mask }) => mask);
  const handleSearch = (keywords: string) => {
    dispatch(setDialogReset());
    dispatch(setKeywords({ searchValue: keywords }));
    // push(`/search?keywords=${keywords}`);
  };
  if (!searchVisibility) return null;

  return (
    <Mask>
      <div
        className={classNames(
          style.box,
          keywords && style.val,
          "absolute shadow rounded bg-white py-2 z-10"
        )}
      >
        {keywords ? (
          <Suggest keywords={keywords} />
        ) : (
          <div className={"overflow-auto h-full flex-auto"}>
            <History handleSearch={handleSearch} />
            <div className="subtitle px-5 py-3 text-sm text-gray-400">
              热搜榜
            </div>
            <Hot handleSearch={handleSearch} />
          </div>
        )}
      </div>
    </Mask>
  );
};

export default memo(Search);
