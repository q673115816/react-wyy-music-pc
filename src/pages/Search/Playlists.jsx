import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default ({ playlists = [] }) => (
  <div className="playlists_list _list">
    {
      playlists.map((item, index) => (
        <div className={classNames('item flex items-center relative hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })} key={item.id}>
          <Link className="absolute inset-0 z-0" to={`/playlist/music/${item.id}`} />
          <div className="cover">
            <img className="containimg" src={`${item.coverImgUrl}?param=100y100`} alt="" />
          </div>
          <div className="name">
            {item.name}
          </div>
          <div className="trackCount">
            {item.trackCount}
            首
          </div>
          <div className="creator text-gray-400">
            by &nbsp;
            <Link
              to={`/user/${item.creator.userId}`}
              className="text-gray-600 hover:text-black relative z-10"
            >
              {item.creator.nickname}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
