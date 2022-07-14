import React, { memo } from "react";
import { IconPlayerPlay } from "@tabler/icons";

const Song = ({ msg = {} }) => (
  <button type="button" className="share w-56 flex rounded p-2 bg-gray-50 mt-2">
    <div className="avatar flex-none w-10 h-10 rounded relative overflow-hidden">
      <img src={`${msg.song.album.picUrl}?param=100y100`} alt="" />
      <i className="absolute inset-0 m-auto w-6 h-6 bg-white bg-opacity-90 flex-center rounded-full ui_themeColor">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </div>
    <div className="content flex-auto w-0 pl-2.5 text-left">
      <div className="name truncate">
        {msg.song.name}
        {msg.song.alias.length > 0 && (
          <span className="text-gray-400">
            {`（${msg.song.alias.join(",")}）`}
          </span>
        )}
      </div>
      <div className="text-gray-400 artist truncate">
        {msg.song.artists.map((artist, index) => (
          <span key={artist.name}>
            {index > 0 && " / "}
            {artist.name}
          </span>
        ))}
      </div>
    </div>
  </button>
);

export default memo(Song);
