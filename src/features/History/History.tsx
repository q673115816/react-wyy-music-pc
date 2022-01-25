import React, { memo, useCallback } from "react";
import classNames from "classnames";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

import useLoginStatus from "@/hooks/useLoginStatus";
import DomRank from "@/components/Table/Rank";
import DomGroupPlay from "@/components/GroupPlay";
import DomName from "@/components/Table/Name";
import DomArtist from "@/components/Table/Artists";
import DomMenuCreate from "@/components/MenuCreate";
import { setAudioHistoryClear } from "@/modules/reducers/audio/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const DomTable = ({ history = [] }) => (
  <div
    className="pb-8"
    style={{ "--ui_grid_template": "36px / 54px 45% 5fr 3fr" }}
  >
    <div className="list">
      <div className="thead">
        <div className="item grid leading-8 ui_grid_template">
          <div className="index" />
          <div className="name text-gray-500 px-2">音乐标题</div>
          <div className="artist text-gray-500 px-2">歌手</div>
          <div className="duration text-gray-500 px-2">播放时间</div>
        </div>
      </div>
      <div className="tbody">
        {history.map((item, index) => (
          <DomMenuCreate
            schema={[
              ["评论", "播放", "下一首播放"],
              ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
            ]}
            type="song"
            item={item}
            key={item.id}
            tabIndex="2"
            className={classNames(
              "grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",
              { "bg-gray-50": index % 2 === 0 }
            )}
          >
            <>
              <div className="index pr-3 text-right">
                <DomRank index={index} />
              </div>
              <DomName item={item} className="px-2" />
              <DomArtist artists={item.ar} className="px-2" />
              <div className="duration text-gray-400 truncate px-2">
                {dayjs(item.lastTime).fromNow()}
              </div>
            </>
          </DomMenuCreate>
        ))}
      </div>
    </div>
  </div>
);

export default memo(() => {
  useLoginStatus();
  const dispatch = useAppDispatch();
  const { history } = useAppSelector(({ audio }) => audio);
  const memoHandleClear = useCallback(() => {
    if (history.length === 0) return false;
    dispatch(setAudioHistoryClear());
  }, [history]);
  return (
    <div className="w-full overflow-auto max-h-full flex-auto">
      <div className="px-8 pb-2.5 pt-6">
        <div className="flex items-center pb-8">
          <div className="h1">最近播放</div>
          &nbsp; &nbsp;
          <div className="text-gray-400">{`共${history.length}首`}</div>
          <button
            onClick={memoHandleClear}
            type="button"
            className={classNames(
              "ml-auto text-sm",
              history.length === 0 ? "text-gray-300" : "ui_link"
            )}
          >
            清空列表
          </button>
        </div>
        <DomGroupPlay playlist={history} />
      </div>
      {history.length > 0 ? (
        <DomTable history={history} />
      ) : (
        <div className="text-center pt-40 text-gray-400">
          你还没播放任何音乐
        </div>
      )}
    </div>
  );
});
