import React, { memo } from "react";
import { useAppSelector } from "@/modules/hooks";
import classNames from "classnames";
import { searchSelector } from "@/modules/reducers/search/slice";
import Mask from "../Mask";
import History from "./History";
import Hot from "./Hot";
import style from "./style.module.scss";
import Suggest from "./Suggest";

const Search = () => {
  const { keywords } = useAppSelector(searchSelector);
  const { searchVisibility } = useAppSelector(({ mask }) => mask);
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
            <History />
            <div className="subtitle px-5 py-3 text-sm text-gray-400">
              热搜榜
            </div>
            <Hot />
          </div>
        )}
      </div>
    </Mask>
  );
};

export default memo(Search);
