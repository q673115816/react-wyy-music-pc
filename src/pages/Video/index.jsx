import React from 'react';
import {
  NavLink, Switch, Redirect, Route,
  useRouteMatch,
} from 'react-router-dom';
import VideoList from './VideoList';
import MvList from './MvList';
import './style.scss';

export default () => {
  const { url } = useRouteMatch();
  return (
    <div className="domVideoList">
      <div className="domVideoList_header ui_header">
        <NavLink
          className="domVideoList_link"
          activeClassName="on"
          to={`${url}/videolist`}
        >
          视频
        </NavLink>
        <NavLink
          className="domVideoList_link"
          activeClassName="on"
          to={`${url}/mvlist`}
        >
          MV
        </NavLink>
      </div>
      <Switch>
        <Route path={`${url}/videolist`}>
          <VideoList />
        </Route>
        <Route path={`${url}/mvlist`}>
          <MvList />
        </Route>
        <Redirect to={`${url}/videolist`} />
      </Switch>
    </div>
  );
};
