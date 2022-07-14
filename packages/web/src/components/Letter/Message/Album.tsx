import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";

const Album = ({ msg = {} }) => (
  <Link
    to={`/playlist/album/${msg.album.id}`}
    className="share flex rounded p-2 bg-gray-50 mt-2 w-56"
  >
    <button
      type="button"
      className="avatar flex-none w-10 h-10 rounded relative overflow-hidden group"
    >
      <img src={`${msg.album.picUrl}?param=100y100`} alt="" />
      <i className="absolute opacity-0 group-hover:opacity-100 inset-0 m-auto w-6 h-6 bg-white bg-opacity-90 flex-center rounded-full ui_themeColor">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </button>
    <div className="content flex-auto w-0 pl-2.5 text-left">
      <div className="name truncate">
        {msg.album.name}
        {msg.album.alias.length > 0 && (
          <span className="text-gray-400">
            {`（${msg.album.alias.join(",")}）`}
          </span>
        )}
      </div>
      <div className="text-gray-400 artist truncate">
        {msg.album.artist.name}
      </div>
    </div>
  </Link>
);

export default memo(Album);
