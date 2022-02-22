import React, { FC, memo } from "react";
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

interface iProps {
  songs: [];
}

const Songs: FC<iProps> = ({ songs = [] }) => {
  return (
    <div
      className="songs_list"
      style={{
        "--ui_grid_template": "36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr",
      }}
    >
      <div className="thead">
        <div className="item grid items-center text-gray-400 ui_grid_template">
          <div className="index" />
          <div className="heart" />
          <div className="download" />
          <div className="name flex-auto px-2">音乐标题</div>
          <div className="artist flex-none px-2">歌手</div>
          <div className="album flex-none px-2">专辑</div>
          <div className="duration flex-none px-2">时长</div>
          <div className="pop flex-none px-2">热度</div>
        </div>
      </div>
      <div className="tbody">
        {songs.map((item, index) => (
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
                "item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",
                { "bg-gray-50": index % 2 === 0 }
              )}
            >
              <div className="index px-2">
                <Rank index={index} id={item.id} />
              </div>
              <div className="heart text-center">
                <Heart id={item.id} />
              </div>
              <div className="download text-center">
                <Download />
              </div>
              <div className="name px-2">
                <Name item={item} />
              </div>
              <div className="artist flex-none px-2 truncate text-gray-400">
                <Artists artists={item.ar} />
              </div>
              <div className="album truncate flex-none px-2">
                <Album name={item.al.name} id={item.al.name} />
              </div>
              <div className="duration text-gray-400 truncate flex-none px-2">
                {dayjs(item.dt).format("mm:ss")}
              </div>
              <div className="pop">
                <Pop pop={item.pop} />
              </div>
            </div>
          </MenuCreate>
        ))}
      </div>
    </div>
  );
};

export default memo(Songs);
