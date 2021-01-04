import React from 'react';
import { Link } from 'react-router-dom';

export default ({ playlists = [] }) => (
  <div className="playlists_list _list">
    {
      playlists.map((item) => (
        <Link to={`/playlist/music/${item.id}`} className="item" key={item.id}>
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
          <div className="creator gray">
            by &nbsp;
            <Link to={`/user/${item.creator.userId}`} className="ui_hover">{item.creator.nickname}</Link>
          </div>
        </Link>
      ))
    }
  </div>
);
