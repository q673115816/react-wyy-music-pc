import React, { CSSProperties, FC, memo } from "react";
import classNames from "classnames";
import dayjs from "dayjs";

import MenuCreate from "@/components/MenuCreate/MenuCreate";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import Name from "@/components/Table/Name";
import Artists from "@/components/Table/Artists";
import Album from "@/components/Table/Album";

interface iProps {
  songs: any[];
}

const Playlist: FC<iProps> = ({ songs = [] }) => {
  if (!songs.length) {
    return (
      <div className="pt-16 text-center text-sm text-gray-400">暂无音乐</div>
    );
  }
  return (
    <div
      style={
        {
          "--ui_grid_template": "36px / 30px 30px 30px 36% 4fr 6fr 2fr",
        } as CSSProperties
      }
      className="mt-4"
    >
      <div className="grid ui_grid_template pl-8">
        <div />
        <div />
        <div />
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">
          音乐标题
        </div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">
          歌手
        </div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">
          专辑
        </div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">
          时长
        </div>
      </div>
      {songs.map((item, index) => (
        <MenuCreate
          schema={[
            ["评论", "播放", "下一首播放"],
            ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
          ]}
          type="song"
          item={item}
          key={item.id}
        >
          <div
            tabIndex={2}
            className={classNames(
              "grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",
              index % 2 === 0 && "bg-gray-50"
            )}
          >
            <div className="px-1">
              <Rank index={index} id={item.id} />
            </div>
            <div className="px-1">
              <Heart id={item.id} />
            </div>
            <div className="px-1">
              <Download />
            </div>
            <Name className="px-1" item={item} />
            <Artists className="px-1" artists={item.ar} />
            <Album className="px-1" name={item.al.name} id={item.al.id} />
            <div className="text-gray-500 px-1">
              {dayjs(item.dt).format("mm:ss")}
            </div>
          </div>
        </MenuCreate>
      ))}
    </div>
  );
};

export default memo(Playlist);
