import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DomHome from './Home';
import DomHighquality from './Highquality';

export default () => (
  <Switch>
    <Route path="/home/playlist/highquality/:cat">
      <DomHighquality />
    </Route>
    <Route path="/home/playlist/:cat/:page">
      <DomHome />
    </Route>
    <Route path="/home/playlist/:cat">
      <DomHome />
    </Route>
    <Redirect to="/home/playlist/全部歌单" />
    {/* <Route path="/home/playlist" component={DomHome} /> */}
  </Switch>
);
