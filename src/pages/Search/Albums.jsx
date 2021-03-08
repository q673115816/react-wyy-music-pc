import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default ({ albums = [] }) => (
  <div className="albums_list _list">
    {albums.map((item, index) => (
      <div
        tabIndex="2"
        className={classNames('item flex items-center relative hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })}
        key={item.id}
      >
        <Link
          className="absolute inset-0 z-0"
          to={`/playlist/album/${item.id}`}
        />
        <div className="cover flex-none">
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
        <div className="artist truncate">
          <Link
            to={`/artist/${item.artist.id}`}
            className="text-gray-600 hover:text-black relative z-10"
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
      </div>
    ))}
  </div>
);
