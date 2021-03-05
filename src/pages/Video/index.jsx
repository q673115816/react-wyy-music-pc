import React, { memo } from 'react';
import {
  NavLink, Switch, Redirect, Route,
} from 'react-router-dom';
import VideoList from './VideoList';
import MVList from './MVList';
import './style.scss';

export default memo(() => (
  <div className="domVideoList">
    <div className="domVideoList_header ui_header">
      <NavLink
        className="domVideoList_link"
        activeClassName="on"
        to="/video/videolist"
      >
        视频
      </NavLink>
      <NavLink
        className="domVideoList_link"
        activeClassName="on"
        to="/video/mvlist"
      >
        MV
      </NavLink>
    </div>
    <Switch>
      <Route path="/video/videolist">
        <VideoList />
      </Route>
      <Route path="/video/mvlist">
        <MVList />
      </Route>
      <Redirect to="/video/videolist" />
    </Switch>
  </div>
));
