import React from 'react';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';

export default ({ playlist = [] }) => (
  <div className="domHome_recommend_playlist ui_grid_square col_5">
    <div className="item">
      <div className="cover">
        <div className="inner">
          <Link to="/" />
        </div>
      </div>
      <div className="footer">
        <Link to="/">每日歌曲推荐</Link>
      </div>
    </div>
    {
      playlist.map((item) => (
        <div key={item.id} className="item">
          <div className="cover">
            <div className="inner">
              <Link to={`/playlist/${item.id}`}>
                <img className="containimg" src={`${item.picUrl}?param=200y200`} alt="" />
                <div className="rt">
                  <span className="whitetext">{transPlayCount(item.playcount)}</span>
                </div>
                <div className="rb">
                  <span className="playArrow">
                    <i className="material-icons">play_arrow</i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer">
            <Link to={`/playlist/${item.id}`}>{item.name}</Link>
          </div>
        </div>
      ))
    }
  </div>
);
