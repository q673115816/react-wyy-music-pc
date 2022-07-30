import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { IconFolderPlus } from "@tabler/icons";
import { setAudioPlaylistClear } from "@/modules/reducers/audio/slice";
import "./style.scss";
import List from "./List";

const PlayList = () => {
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
        <List list={playlist} currentId={currentSong.id} />
      </div>
    </div>
  );
};

export default memo(PlayList);
