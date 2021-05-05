import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const layouts = {
  '--grid-template-columns': '60px 1fr 1fr',
};

export default ({ albums = [] }) => (
  <div className="albums_list _list" style={layouts}>
    {albums.map((item, index) => (
      <div
        tabIndex="2"
        className={classNames('item grid items-center relative hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })}
        key={item.id}
      >
        <Link
          className="absolute inset-0 z-0"
          to={`/playlist/album/${item.id}`}
        />
        <div className="cover">
          <img src={`${item.picUrl}?param=60y60`} alt="" />
        </div>
        <div className="name px-5 text-sm">
          {item.name}
          {item.alias.length > 0
            && (
            <span className="text-gray-400">
              {`（${item.alias}）`}
            </span>
            )}
        </div>
        <div className="artist truncate">
          <Link
            to={`/artist/${item.artist.id}`}
            className="ui_text_gray_hover relative z-10"
          >
            {item.artist.name}
            {item.artist.alias.length > 0
            && (
            <span className="text-gray-400">
              {`（${item.artist.alias}）`}
            </span>
            )}
          </Link>
        </div>
      </div>
    ))}
  </div>
);
