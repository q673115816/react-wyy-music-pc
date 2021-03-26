import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const layouts = {
  '--grid-template-columns': '60px 6fr 2fr 5fr',
};

export default ({ playlists = [] }) => (
  <div className="playlists_list _list" style={layouts}>
    {
      playlists.map((item, index) => (
        <div className={classNames('item grid items-center relative hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })} key={item.id}>
          <Link className="absolute inset-0 z-0" to={`/playlist/music/${item.id}`} />
          <div className="cover">
            <img className="" src={`${item.coverImgUrl}?param=60y60`} alt="" />
          </div>
          <div className="name px-3">
            {item.name}
          </div>
          <div className="trackCount text-gray-400">
            {item.trackCount}
            首
          </div>
          <div className="creator text-gray-300">
            by &nbsp;
            <Link
              to={`/user/${item.creator.userId}`}
              className="ui_text_black_hover relative z-10"
            >
              {item.creator.nickname}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
