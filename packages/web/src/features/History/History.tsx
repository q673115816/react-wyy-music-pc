import React, { memo } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

import useLoginStatus from "@/hooks/useLoginStatus";
import GroupPlay from "@/components/GroupPlay";
import { setAudioHistoryClear } from "@/modules/reducers/audio/slice";
import { useAppDispatch } from "@/modules/hooks";
import Content from "./Content";

const History = () => {
  useLoginStatus();
  const dispatch = useAppDispatch();

  const handleClear = () => {
    if (history.length === 0) return false;
    dispatch(setAudioHistoryClear());
  };
  return (
    <div className="w-full overflow-auto max-h-full flex-auto">
      <div className="px-8 pb-2.5 pt-6">
        <div className="flex items-center pb-8">
          <div className="h1">最近播放</div>
          &nbsp; &nbsp;
          <div className="text-gray-400">{`共${history.length}首`}</div>
          <button
            onClick={handleClear}
            type="button"
            className={classNames(
              "ml-auto text-sm",
              history.length === 0 ? "text-gray-300" : "ui_link"
            )}
          >
            清空列表
          </button>
        </div>
        <GroupPlay playlist={history} />
      </div>
      <Content />
    </div>
  );
};

export default memo(History);
