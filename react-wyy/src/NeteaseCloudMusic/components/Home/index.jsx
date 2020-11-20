import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import HomeRecommend from "./components/Recommend";
import HomeToplist from "./components/Toplist";
import HomePlaylist from "./components/Playlist";
import HomeArtist from "./components/Artist";
import HomeNewest from "./components/Newest";
import HomeDj from "./components/Dj";
export default () => {
  return (
    <div className="domhome">
      <div className="domhome_nav">
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/recommend"
        >
          个性推荐
        </NavLink>
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/playlist"
        >
          歌单
        </NavLink>
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/dj"
        >
          主播电台
        </NavLink>
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/toplist"
        >
          排行榜
        </NavLink>
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/artist"
        >
          歌手
        </NavLink>
        <NavLink
          className="domhome_nav_link"
          activeClassName="on"
          to="/home/newest"
        >
          最新音乐
        </NavLink>
      </div>
      <div className="domhome_content">
        <Switch>
          <Route path="/home/recommend">
            <HomeRecommend />
          </Route>
          <Route path="/home/toplist">
            <HomeToplist />
          </Route>
          <Route path="/home/playlist">
            <HomePlaylist />
          </Route>
          <Route path="/home/artist">
            <HomeArtist />
          </Route>
          <Route path="/home/newest">
            <HomeNewest />
          </Route>
          <Route path="/home/dj">
            <HomeDj />
          </Route>
          <Redirect from="/home" to="/home/recommend" />
        </Switch>
      </div>
    </div>
  );
};
