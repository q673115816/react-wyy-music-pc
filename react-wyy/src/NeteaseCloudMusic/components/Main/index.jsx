import React, { useState } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri";
import Home from "../Home";
import Play from "../Play";
import Local from "../Local";
import Download from "../Download";
const DommainLeftLink = ({ children, ...props }) => {
  return (
    <NavLink
      className="dommain_left_link"
      {...{ ...props }}
      activeClassName="on"
    >
      {children}
    </NavLink>
  );
};
export default () => {
  const [showplaylist, setPlaylist] = useState(true);
  return (
    <div className="dommain">
      <div className="dommain_left">
        <ul>
          <li>
            <DommainLeftLink to="/home">发现音乐</DommainLeftLink>
          </li>
          <li>
            <DommainLeftLink to="/play">视频</DommainLeftLink>
          </li>
          <li>
            <DommainLeftLink to="/friend">朋友</DommainLeftLink>
          </li>
          <li>
            <DommainLeftLink to="/live">直播</DommainLeftLink>
          </li>
          <li>
            <DommainLeftLink to="/fm">私人FM</DommainLeftLink>
          </li>
        </ul>
        <div className="dommain_left_dt">我的音乐</div>
        <ul>
          <li>
            <DommainLeftLink to="/local">本地音乐</DommainLeftLink>
          </li>
          <li>
            <DommainLeftLink to="/download">下载管理</DommainLeftLink>
          </li>
        </ul>
        <div className="dommain_left_dt">
          <div className="playlist_control">
            <span
              className="_toggle"
              onClick={() => setPlaylist(!showplaylist)}
            >
              创建的歌单
              {showplaylist ? (
                <RiArrowDropDownFill size="24" />
              ) : (
                <RiArrowDropRightFill size="24" />
              )}
            </span>
            <span title="新建歌单" className="addplaylist">
              +
            </span>
          </div>
        </div>
        <ul
          className="songmenu"
          style={{ display: showplaylist ? null : "none" }}
        >
          <li>
            <DommainLeftLink to="/mylike">我喜欢的音乐</DommainLeftLink>
          </li>
        </ul>
      </div>
      <div className="dommain_split"></div>
      <div className="dommain_right">
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/local">
            <Local />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </div>
  );
};
