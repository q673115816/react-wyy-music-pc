import React, { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useMemoParmas from '@/custom/useMemoParams';
import DomHome from './Home';
import DomHighquality from './Highquality';

export default memo(() => (
  <Switch>
    <Route path="/home/playlist/highquality">
      {({ match: { path } }) => (
        <Switch>
          <Route path={`${path}/:cat`}>
            {useMemoParmas(DomHighquality)}
          </Route>
          <Redirect to={`${path}/全部歌单`} />
        </Switch>
      )}
    </Route>
    <Route path="/home/playlist/:cat/:page">
      {useMemoParmas(DomHome)}
    </Route>
    <Redirect from="/home/playlist/:cat" to="/home/playlist/:cat/1" />
    <Redirect to="/home/playlist/全部歌单" />
    {/* <Route path="/home/playlist" component={DomHome} /> */}
  </Switch>
));
