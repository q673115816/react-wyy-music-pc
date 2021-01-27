import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DomHome from './Home';
import DomToplist from './Toplist';

export default () => (
  <Switch>
    <Route path="/home/dj/toplist/:type" component={DomToplist} />
    <Route path="/home/dj/toplist" component={DomToplist} />
    <Route path="/home/dj" component={DomHome} />
  </Switch>
);
