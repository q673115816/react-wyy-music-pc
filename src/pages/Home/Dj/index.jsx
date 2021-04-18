import React from 'react';
import { Switch, Route } from 'react-router-dom';
import useMemoParams from '@/custom/useMemoParams';
import DomHome from './Home';
import DomToplist from './Toplist';

export default () => (
  <Switch>
    <Route path="/home/dj/toplist/:type">
      {useMemoParams(DomToplist)}
    </Route>
    <Route path="/home/dj/toplist">
      <DomToplist />
    </Route>
    <Route path="/home/dj">
      <DomHome />
    </Route>
  </Switch>
);
