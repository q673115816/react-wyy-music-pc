import MenuCreate from "@/components/MenuCreate/MenuCreate";
import classNames from "classnames";
import Rank from "@/components/Table/Rank";
import Name from "@/components/Table/Name";
import Artists from "@/components/Table/Artists";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");
import React, { memo } from "react";
import { useAppSelector } from "@/modules/hooks";
import { audioSelector } from "@/modules/reducers/audio/slice";

const Content = () => {
  const { history } = useAppSelector(audioSelector);
  console.log(history);
  if (history.length === 0) {
    return (
      <div className="text-center pt-40 text-gray-400">你还没播放任何音乐</div>
    );
  }
  return (
    <div
      className="pb-8"
      style={{ "--ui_grid_template": "36px / 54px 45% 5fr 3fr" }}
    >
      <div>
        <div className="grid items-center text-gray-500 ui_grid_template">
          <div className="col-start-2 px-2">音乐标题</div>
          <div className="px-2">歌手</div>
          <div className="px-2">播放时间</div>
        </div>
        {history.map((item, index) => (
          <MenuCreate
            schema={[
              ["评论", "播放", "下一首播放"],
              ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
            ]}
            type="song"
            item={item}
            key={item.name + item.id}
            tabIndex={2}
            className={classNames(
              "grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",
              { "bg-gray-50": index % 2 === 0 }
            )}
          >
            <>
              <div className="index pr-3 text-right">
                <Rank index={index} />
              </div>
              <Name item={item} className="px-2" />
              <Artists artists={item.ar} className="px-2" />
              <div className="duration text-gray-400 truncate px-2">
                {dayjs(item.lastTime).fromNow()}
              </div>
            </>
          </MenuCreate>
        ))}
      </div>
    </div>
  );
};

export default memo(Content);
