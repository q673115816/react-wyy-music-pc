import React, { memo } from 'react';
import {
  NavLink, Switch, Redirect, Route,
} from 'react-router-dom';
import VideoList from './VideoList';
import MVList from './MVList';
import './style.scss';

const navs = [
  ['视频', '/video/videolist'],
  ['MV', '/video/mvlist'],
];

export default memo(() => (
  <div className="domVideoList flex flex-col h-full">
    <div className="domVideoList_header ui_header text-base space-x-4">
      {
        navs.map(([name, path]) => (
          <NavLink
            className="domVideoList_link"
            activeClassName="text-xl ui_underline font-bold"
            to={path}
          >
            {name}
          </NavLink>
        ))
      }
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
