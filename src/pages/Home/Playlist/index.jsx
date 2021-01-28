import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DomHome from './Home';
import DomHighquality from './Highquality';

export default () => (
  <Switch>
    <Route path="/home/playlist/highquality/:cat" component={DomHighquality} />
    <Route path="/home/playlist/:cat/:page" component={DomHome} />
    <Route path="/home/playlist/:cat" component={DomHome} />
    <Redirect to="/home/playlist/全部歌单" />
    {/* <Route path="/home/playlist" component={DomHome} /> */}
  </Switch>
);
