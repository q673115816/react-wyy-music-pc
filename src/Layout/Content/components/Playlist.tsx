import {
  IconCaretDown,
  IconCaretRight,
  IconLock,
  IconMusic,
} from "@tabler/icons";
import React, { FC, memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { playlistState } from "@/reducers/account/slice";
import classNames from "classnames";

interface PlaylistProps {
  name: string;
  playlist: playlistState[];
}

const Playlist: FC<PlaylistProps> = ({ name, playlist }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="text-sm text-gray-400 mx-3 my-2">
        <div className="playlist_control flex items-center">
          <button
            type="button"
            className="_toggle flex items-center flex-auto"
            onClick={() => setVisible(!visible)}
            title={visible ? "收起" : "展开"}
          >
            {name}
            {visible ? (
              <IconCaretDown size={8} className="fill-current" />
            ) : (
              <IconCaretRight size={8} className="fill-current" />
            )}
          </button>
          <button type="button" title="新建歌单">
            +
          </button>
        </div>
      </div>
      {visible && (
        <nav className="space-y-0.5">
          {playlist.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) =>
                classNames(
                  "flex text-sm p-2 items-center hover:bg-gray-100",
                  isActive && "bg-gray-100"
                )
              }
              to={`/playlist/music/${item.id}`}
            >
              {item.privacy === 10 ? (
                <IconLock size={20} stroke={1} className="flex-none mr-1" />
              ) : (
                <IconMusic size={20} stroke={1} className="flex-none mr-1" />
              )}
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default memo(Playlist);
