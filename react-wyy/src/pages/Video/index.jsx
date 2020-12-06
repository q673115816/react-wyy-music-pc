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
          to={`${url}/videolist/all`}
        >
          视频
        </NavLink>
        <NavLink
          className="domplay_link"
          activeClassName="on"
          to={`${url}/mvlist/all`}
        >
          mv
        </NavLink>
      </div>
      <div className="domplay_content overflow-auto">
        <Switch>
          <Route path={`${url}/videolist/:id`}>
            <VideoList />
          </Route>
          <Route path={`${url}/mvlist/:id`}>
            <MvList />
          </Route>
          <Redirect from={`${url}`} to={`${url}/videolist`} />
        </Switch>
      </div>
    </div>
  );
};
