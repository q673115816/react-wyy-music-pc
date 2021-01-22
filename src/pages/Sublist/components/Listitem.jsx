import React from 'react';
import { Link } from 'react-router-dom';

export default ({ item = {}, push }) => (
  <div
    role="button"
    className="item"
    key={item.id}
    onClick={() => push(`/playlist/music/${item.id}`)}
  >
    <div className="cover">
      <Link to={`/playlist/music/${item.id}`}>
        <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
      </Link>
    </div>
    <div className="name truncate">
      <Link to={`/playlist/music/${item.id}`}>
        {item.name}
      </Link>
      <span className="ui_gray">
        {item.alias.map((alia) => alia)}
      </span>
    </div>
    <div className="artist">
      {item.artists.map((artist) => (
        <Link
          key={artist.id}
          onClick={(e) => e.stopPropagation()}
          to={`/artist/${artist.id}`}
          className="ui_gray hover"
        >
          {artist.name}
        </Link>
      ))}
    </div>
    <div className="size ui_gray">
      {item.size}
      首
    </div>
  </div>
);
