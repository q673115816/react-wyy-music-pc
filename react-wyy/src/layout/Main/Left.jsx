import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  const [showplaylist, setPlaylist] = useState(true);

  return (
    <div className="dommain_left">
      <ul>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/home">发现音乐</NavLink>
        </li>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/video">视频</NavLink>
        </li>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/friend">朋友</NavLink>
        </li>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/live">直播</NavLink>
        </li>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/fm">私人FM</NavLink>
        </li>
      </ul>
      <div className="dommain_left_dt">我的音乐</div>
      <ul>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/local">本地音乐</NavLink>
        </li>
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/download">下载管理</NavLink>
        </li>
      </ul>
      <div className="dommain_left_dt">
        <div className="playlist_control">
          <span
            className="_toggle"
            onClick={() => setPlaylist(!showplaylist)}
          >
            创建的歌单
          </span>
          <span title="新建歌单" className="addplaylist">
            +
          </span>
        </div>
      </div>
      <ul
        className="songmenu"
        style={{ display: showplaylist ? null : 'none' }}
      >
        <li>
          <NavLink className="dommain_left_link" activeClassName="on" to="/mylike">我喜欢的音乐</NavLink>
        </li>
      </ul>
    </div>

  );
};
