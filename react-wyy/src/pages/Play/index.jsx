import React from 'react';
import {
  NavLink, Switch, Redirect, Route,
} from 'react-router-dom';
import VideoList from '../VideoList';
import MvList from '../MvList';
import './style.scss';

export default () => {
  const relative = '/play';
  return (
    <div className="domplay">
      <div>
        <NavLink
          className="domplay_link"
          activeClassName="on"
          to={`${relative}/videolist/all`}
        >
          视频
        </NavLink>
        <NavLink
          className="domplay_link"
          activeClassName="on"
          to={`${relative}/mvlist/all`}
        >
          mv
        </NavLink>
      </div>
      <div className="domplay_content">
        <Switch>
          <Route path="/play/videolist/:id">
            <VideoList />
          </Route>
          <Route path="/play/mvlist/:id">
            <MvList />
          </Route>
          <Redirect from={`${relative}`} to={`${relative}/videolist/all`} />
        </Switch>
      </div>
    </div>
  );
};
