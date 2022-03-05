import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  IconFolderPlus,
  IconLink,
  IconPlayerPlay,
  IconPlayerPause,
} from "@tabler/icons";
import { setAudioPlaylistClear } from "@/modules/reducers/audio/slice";
import { setPopupPlaylistToggle } from "@/modules/reducers/mask/slice";
import DomName from "@/components/Table/Name";
import DomMenuCreate from "@/components/MenuCreate/MenuCreate";
import "./style.scss";

const Empty = () => {
  const dispatch = useDispatch();
  return (
    <div className="empty w-min m-auto pt-20 whitespace-nowrap">
      <div className="text-gray-400 text-sm text">您还没添加任何歌曲！</div>
      <div className="text-gray-400 mt-6">
        去首页
        <Link
          to="/"
          className="ui_text_black_hover underline"
          onClick={() => dispatch(setPopupPlaylistToggle({}))}
        >
          发现音乐
        </Link>
      </div>
    </div>
  );
};

const DomList = ({ list = [], currentId }) => {
  if (list.length === 0) return <Empty />;
  const { running } = useSelector(({ audio }) => audio);
  return (
    <div>
      {list.map((item, index) => (
        <DomMenuCreate
          schema={[
            ["评论", "播放"],
            ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
          ]}
          type="song"
          item={item}
          key={item.id}
          tabIndex="2"
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
            <DomName item={item} />
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
        </DomMenuCreate>
      ))}
    </div>
  );
};

export default memo(() => {
  const dispatch = useDispatch();
  const { popupStatus } = useSelector(({ mask }) => mask);
  const { playlist, currentSong } = useSelector(({ audio }) => audio);
  const handleClear = () => {
    if (playlist.length === 0) return false;
    return dispatch(setAudioPlaylistClear());
  };
  if (popupStatus !== "playlist") return null;
  return (
    <div
      id="playlist"
      className="absolute right-0 shadow bg-white z-40 flex flex-col"
    >
      <div className="px-5 flex-none">
        <div className="py-4">
          <div className="h1">当前播放</div>
        </div>
        <div className="actions flex items-center pb-2.5 border-b">
          <span className="text-gray-400">{`总${playlist.length}首`}</span>
          <div className="right ml-auto flex divide-x">
            <button
              type="button"
              className={classNames("action px-5 flex-center", {
                "text-gray-300": playlist.length === 0,
              })}
            >
              <IconFolderPlus size={20} stroke={1} />
              收藏全部
            </button>
            <button
              type="button"
              onClick={handleClear}
              className={classNames("action px-5 flex-center", {
                "text-gray-300": playlist.length === 0,
              })}
            >
              清空列表
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-full flex-auto">
        <DomList list={playlist} currentId={currentSong.id} />
      </div>
    </div>
  );
});
