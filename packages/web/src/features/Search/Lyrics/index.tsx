import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import DomMenuCreate from "@/components/MenuCreate/MenuCreate";
import DomRank from "@/components/Table/Rank";
import DomHeart from "@/components/Table/Heart";
import DomDownload from "@/components/Table/Download";
import DomName from "@/components/Table/Name";
import DomArtists from "@/components/Table/Artists";
import DomAlbum from "@/components/Table/Album";
import DomPop from "@/components/Table/Pop";
import DomLyricsItem from "./Item";

export default ({ songs: lyrics = [] }) => (
  <div
    className="lyrics_list"
    style={{
      "--ui_grid_template": "36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr",
    }}
  >
    <div className="thead">
      <div className="item grid items-center text-gray-400 ui_grid_template">
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
        <DomMenuCreate
          schema={[
            ["评论", "播放", "下一首播放"],
            ["收藏到歌单", "分享", "复制链接", "下载"],
          ]}
          item={item}
          type="song"
          key={item.id}
        >
          <div
            tabIndex="2"
            className={classNames(
              "item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template",
              { "bg-gray-50": index % 2 === 0 }
            )}
          >
            <div className="index pr-2">
              <DomRank index={index} id={item.id} />
            </div>
            <div className="heart">
              <DomHeart id={item.id} />
            </div>
            <div className="download">
              <DomDownload />
            </div>
            <div className="name flex">
              <DomName item={item} />
            </div>
            <div className="artist truncate">
              <DomArtists artists={item.ar} />
            </div>
            <div className="album truncate">
              <DomAlbum name={item.al.name} id={item.al.id} />
            </div>
            <div className="duration text-gray-400 truncate">
              {dayjs(item.dt).format("mm:ss")}
            </div>
            <div className="pop">
              <DomPop pop={item.pop} />
            </div>
            <DomLyricsItem lyrics={item.lyrics} />
          </div>
        </DomMenuCreate>
      ))}
    </div>
  </div>
);
