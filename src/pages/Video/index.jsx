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
    <div className="domplay">
      <div className="domplay_header">
        <NavLink
          className="domplay_link"
          activeClassName="on"
          to={`${url}/videolist`}
        >
          视频
        </NavLink>
        <NavLink
          className="domplay_link"
          activeClassName="on"
          to={`${url}/mvlist`}
        >
          mv
        </NavLink>
      </div>
      <Switch>
        <Route path={`${url}/videolist/:id`} component={VideoList} />
        <Route path={`${url}/videolist`} component={VideoList} />
        <Route path={`${url}/mvlist/:id`} component={MvList} />
        <Route path={`${url}/mvlist`} component={MvList} />
        <Redirect to={`${url}/videolist`} />
      </Switch>
    </div>
  );
};
