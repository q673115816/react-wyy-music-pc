import React from 'react';
import { Link } from 'react-router-dom';

export default ({ albums = [] }) => (
  <div className="albums_list _list">
    {albums.map((item) => (
      <Link
        to={`/playlist/album/${item.id}`}
        className="item"
        key={item.id}
      >
        <div className="cover">
          <img src={`${item.picUrl}?param=100y100`} alt="" />
        </div>
        <div className="name">
          {item.name}
          {item.alias.length > 0
            && (
            <span className="text-gray-400">
              （
              {item.alias.map((alia) => alia)}
              ）
            </span>
            )}
        </div>
        <div className="artist">
          <Link
            to={`/artist/${item.artist.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
            {item.artist.name}
            {item.artist.alias.length > 0
            && (
            <span className="text-gray-400">
              （
              {item.artist.alias.map((alia) => alia)}
              ）
            </span>
            )}
          </Link>
        </div>
      </Link>
    ))}
  </div>
);
