import React, { memo } from "react";
import Empty from "./Empty";
import { useSelector } from "react-redux";
import MenuCreate from "@/components/MenuCreate";
import classNames from "classnames";
import { IconLink, IconPlayerPause, IconPlayerPlay } from "@tabler/icons";
import Name from "@/components/Table/Name";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const List = ({ list = [], currentId }) => {
  if (list.length === 0) return <Empty />;
  const { running } = useSelector(({ audio }) => audio);
  return (
    <div>
      {list.map((item, index) => (
        <MenuCreate
          schema={[
            ["评论", "播放"],
            ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
          ]}
          type="song"
          item={item}
          key={item.id}
          tabIndex={2}
          className={classNames(
            "flex items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none h-9 group ",
            {
              "bg-gray-50": index % 2 === 1,
              ui_themeColor: item.id === currentId,
            }
          )}
        >
          <div className="w-6 flex-center flex-none">
            {item.id === currentId &&
              (running ? (
                <IconPlayerPlay
                  className="fill-current ui_themeColor"
                  size={12}
                />
              ) : (
                <IconPlayerPause
                  size={12}
                  className="fill-current ui_themeColor"
                  stroke={1}
                />
              ))}
          </div>
          <div className="name flex-auto w-0">
            <Name item={item} />
          </div>
          <div className="w-24 px-1 flex-none truncate text-gray-500 group-hover:text-black">
            {item.ar.map((artist, index) => (
              <span key={artist.id}>
                {index > 0 && " / "}
                <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
              </span>
            ))}
          </div>
          <div className="w-8 px-1 flex-none">
            <Link to="/">
              <IconLink size={16} stroke={1} />
            </Link>
          </div>
          <div className="w-16 px-1 flex-none text-gray-300 group-hover:text-black">
            {dayjs(item.dt).format("mm:ss")}
          </div>
        </MenuCreate>
      ))}
    </div>
  );
};

export default memo(List);
