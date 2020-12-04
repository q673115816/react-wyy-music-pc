import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default () => (
  <div className="domlocal">
    <div className="domlocal_header">
      <span className="domlocal_header_title">本地音乐</span>
      <span className="domlocal_header_total">共0首</span>
      <span className="domlocal_header_selectFolder">选择目录</span>
    </div>
    <div className="domlocal_nav">
      <NavLink
        className="domlocal_nav_link"
        activeClassName="on"
        to="/local/song"
      >
        歌曲
      </NavLink>
      <NavLink
        className="domlocal_nav_link"
        activeClassName="on"
        to="/local/singer"
      >
        歌手
      </NavLink>
      <NavLink
        className="domlocal_nav_link"
        activeClassName="on"
        to="/local/album"
      >
        专辑
      </NavLink>
      <NavLink
        className="domlocal_nav_link"
        activeClassName="on"
        to="/local/folder"
      >
        文件夹
      </NavLink>
    </div>
    <div className="domlocal_noFolder">
      <div className="domlocal_noFolder_title">请添加本地文件夹</div>
      <div className="domlocal_noFolder_tips">
        升级本地音乐为高品质音乐并和好友分享！
      </div>
      <div className="domlocal_noFolder_button">选择本地音乐文件夹</div>
    </div>
  </div>
);
