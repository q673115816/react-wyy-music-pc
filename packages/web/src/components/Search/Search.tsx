import React, { ChangeEventHandler, memo } from "react";
import classNames from "classnames";

import Mask from "../Mask";
import History from "./History";
import Hot from "./Hot";
import style from "./style.module.scss";
import Suggest from "./Suggest";
import { useMaskStore, useSearchStore } from "@/stores";

const Search = () => {
  const { keywords } = useSearchStore();
  const { searchVisibility } = useMaskStore();
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const keywords = e.target.value;
    useSearchStore.getState().setKeywords({ keywords });
  };
  if (!searchVisibility) return null;

  return (
    <Mask>
      <div
        className={classNames(
          style.box,
          keywords && style.val,
          "absolute top-0 left-48 shadow rounded bg-white py-2 mt-16"
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
