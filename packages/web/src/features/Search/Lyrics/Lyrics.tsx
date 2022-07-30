import React, { memo } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import MenuCreate from "@/components/MenuCreate/MenuCreate";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import Name from "@/components/Table/Name";
import Artists from "@/components/Table/Artists";
import Album from "@/components/Table/Album";
import Pop from "@/components/Table/Pop";
import DomLyricsItem from "./Item";

const Lyrics = ({ songs: lyrics = [] }) => (
  <div className="lyrics_list">
    <div className="thead">
      <div className="item grid items-center text-gray-400 ui_grid_template_song">
        <div className="index" />
        <div className="heart" />
        <div className="download" />
        <div className="name">音乐标题</div>
        <div className="artist">歌手</div>
        <div className="album">专辑</div>
        <div className="duration">时长</div>
        <div className="text-gray-400">热度</div>
      </div>
    </div>
    <div className="tbody">
      {lyrics.map((item, index) => (
        <MenuCreate
          schema={[
            ["评论", "播放", "下一首播放"],
            ["收藏到歌单", "分享", "复制链接", "下载"],
          ]}
          item={item}
          type="song"
          key={item.id}
        >
          <div
            tabIndex={2}
            className={classNames(
              "item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template_song",
              { "bg-gray-50": index % 2 === 0 }
            )}
          >
            <div className="index pr-2">
              <Rank index={index} id={item.id} />
            </div>
            <div className="heart">
              <Heart id={item.id} />
            </div>
            <div className="download">
              <Download />
            </div>
            <div className="name flex">
              <Name item={item} />
            </div>
            <div className="artist truncate">
              <Artists artists={item.ar} />
            </div>
            <div className="album truncate">
              <Album name={item.al.name} id={item.al.id} />
            </div>
            <div className="duration text-gray-400 truncate">
              {dayjs(item.dt).format("mm:ss")}
            </div>
            <div>
              <Pop pop={item.pop} />
            </div>
            <DomLyricsItem lyrics={item.lyrics} />
          </div>
        </MenuCreate>
      ))}
    </div>
  </div>
);

export default memo(Lyrics);
