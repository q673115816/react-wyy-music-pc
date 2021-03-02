import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DomHome from './Home';
import DomToplist from './Toplist';

export default () => (
  <Switch>
    <Route path="/home/dj/toplist/:type">
      <DomToplist />
    </Route>
    <Route path="/home/dj/toplist">
      <DomToplist />
    </Route>
    <Route path="/home/dj">
      <DomHome />
    </Route>
  </Switch>
);
