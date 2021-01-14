import React from 'react';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { SymbolToday } from '@/components/Symbol';

export default ({ playlist = [] }) => (
  <div className="domHome_recommend_playlist ui_grid square col_5">
    <div className="item">
      <div className="cover">
        <div className="inner">
          <Link to="/dailysong">
            <div className="inner" style={{ color: 'var(--basered)' }}>
              <SymbolToday />
            </div>
          </Link>
        </div>
      </div>
      <div className="footer">
        <Link to="/dailysong">每日歌曲推荐</Link>
      </div>
    </div>
    {
      playlist.slice(0, 9).map((item) => (
        <div key={item.id} className="item">
          <div className="cover">
            <div className="inner">
              <Link to={`/playlist/music/${item.id}`}>
                <img className="ui_containimg" src={`${item.picUrl}?param=200y200`} alt="" />
                <div className="rt">
                  <span className="whitetext">{transPlayCount(item.playcount)}</span>
                </div>
                <div className="rb">
                  <span className="playArrow">
                    <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4v16l13 -8z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer">
            <Link to={`/playlist/music/${item.id}`} className="name ">{item.name}</Link>
          </div>
        </div>
      ))
    }
  </div>
);
