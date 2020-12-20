import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const options1 = [
  {
    name: '发现音乐',
    link: '/home',
  },
  {
    name: '视频',
    link: '/video',
  },
  {
    name: '朋友',
    link: '/friend',
  },
  {
    name: '直播',
    link: '/look',
  },
  {
    name: '私人FM',
    link: '/fm',
  },
];
export default () => {
  const [showplaylist, setPlaylist] = useState(true);
  const { profile, playlist, isLogin } = useSelector(({ account, common }) => ({ ...account, ...common }));
  return (
    <div className="dommain_left">
      <nav>
        {
          options1.map((item) => (
            <NavLink
              key={item.name}
              className="dommain_left_link"
              activeClassName="on"
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))
        }
      </nav>
      <div className="dommain_left_dt">我的音乐</div>
      <nav>
        <NavLink className="dommain_left_link" activeClassName="on" to="/local">本地音乐</NavLink>
        <NavLink className="dommain_left_link" activeClassName="on" to="/download">下载管理</NavLink>
        {isLogin && (
          <>
            <NavLink className="dommain_left_link" activeClassName="on" to="/cloud">我的音乐云盘</NavLink>
            <NavLink className="dommain_left_link" activeClassName="on" to="/dj">我的电台</NavLink>
            <NavLink className="dommain_left_link" activeClassName="on" to="/sublist">我的收藏</NavLink>
          </>
        )}
      </nav>
      <div className="dommain_left_dt">
        <div className="playlist_control">
          <button
            type="button"
            className="_toggle"
            onClick={() => setPlaylist(!showplaylist)}
          >
            创建的歌单
          </button>
          <span title="新建歌单" className="addplaylist">
            +
          </span>
        </div>
      </div>
      <nav
        className="songmenu"
        style={{ display: showplaylist ? null : 'none' }}
      >
        <NavLink className="dommain_left_link" activeClassName="on" to="/mylike">我喜欢的音乐</NavLink>
      </nav>
    </div>

  );
};
