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
        <img className="containimg" src={`${item.picUrl}?param=100y100`} alt="" />
      </Link>
    </div>
    <div className="name text-overflow">
      <Link to={`/playlist/music/${item.id}`}>
        {item.name}
      </Link>
      <span className="gray">
        {item.alias.map((alia) => alia)}
      </span>
    </div>
    <div className="artist">
      {item.artists.map((artist) => (
        <Link onClick={(e) => e.stopPropagation()} to={`/artist/${artist.id}`} className="gray hover">
          {artist.name}
        </Link>
      ))}
    </div>
    <div className="size gray">
      {item.size}
      首
    </div>
  </div>
);
