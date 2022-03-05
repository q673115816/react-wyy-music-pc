import React, { FC, memo } from "react";
import MenuCreate from "@/components/MenuCreate/MenuCreate";
import classNames from "classnames";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import Name from "@/components/Table/Name";
import Artists from "@/components/Table/Artists";
import Album from "@/components/Table/Album";
import dayjs from "dayjs";
import { DailySong } from "@/modules/services/daily/types";

interface iProps {
  dailySongs: DailySong[];
}

const Content: FC<iProps> = ({ dailySongs = [] }) => {
  return (
    <div
      className="pb-8"
      style={{
        "--ui_grid_template": "36px / 54px 30px 30px 36% 4fr 6fr 2fr",
      }}
    >
      <div className="grid items-center text-gray-500 ui_grid_template">
        <div className="col-start-4 px-2">音乐标题</div>
        <div className="px-2">歌手</div>
        <div className="px-2">专辑</div>
        <div className="px-2">时长</div>
      </div>
      {dailySongs.map((dailySong, index) => (
        <MenuCreate
          schema={[
            ["评论", "播放", "下一首播放"],
            ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
          ]}
          type="song"
          item={dailySong}
          key={dailySong.name + dailySong.id}
          tabIndex="2"
          className={classNames(
            "grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",
            { "bg-gray-50": index % 2 === 0 }
          )}
        >
          <div className="pr-3 text-right">
            <Rank index={index} id={dailySong.id} />
          </div>
          <div className="">
            <Heart id={dailySong.id} />
          </div>
          <div className="">
            <Download />
          </div>
          <Name item={dailySong} className="px-2" />
          <Artists artists={dailySong.ar} className="px-2" />
          <Album
            className="px-2"
            name={dailySong.al.name}
            id={dailySong.al.id}
          />
          <div className="text-gray-400 truncate px-2">
            {dayjs(dailySong.dt).format("mm:ss")}
          </div>
        </MenuCreate>
      ))}
    </div>
  );
};

export default memo(Content);
