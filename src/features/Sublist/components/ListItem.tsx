import React, { memo } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item = {}, push }) => (
  <div
    role="button"
    className="item"
    key={item.id}
    onClick={() => push(`/playlist/music/${item.id}`)}
  >
    <div className="cover">
      <Link to={`/playlist/music/${item.id}`}>
        <img
          className="ui_containimg"
          src={`${item.picUrl}?param=100y100`}
          alt=""
        />
      </Link>
    </div>
    <div className="name truncate">
      <Link to={`/playlist/music/${item.id}`}>{item.name}</Link>
      <span className="text-gray-400">{item.alias.map((alia) => alia)}</span>
    </div>
    <div className="artist">
      {item.artists.map((artist) => (
        <Link
          key={artist.id}
          onClick={(e) => e.stopPropagation()}
          to={`/artist/${artist.id}`}
          className="text-gray-400 hover"
        >
          {artist.name}
        </Link>
      ))}
    </div>
    <div className="size text-gray-400">{item.size}首</div>
  </div>
);

export default memo(ListItem);
