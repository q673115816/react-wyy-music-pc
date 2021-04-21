import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import useMemoParams from '@/custom/useMemoParams';
import DomHome from './Home';
import DomToplist from './Toplist';

export default memo(() => (
  <Switch>
    <Route path="/home/dj/toplist/:type?">
      {useMemoParams(DomToplist)}
    </Route>
    <Route path="/home/dj">
      <DomHome />
    </Route>
  </Switch>
));
