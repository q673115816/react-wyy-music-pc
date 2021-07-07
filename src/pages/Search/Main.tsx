import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useMemoParams from '@/hooks/useMemoParams';
import SearchHome from './Home';

export default () => (
  <Switch>
    <Route path="/search/:keywords/:type">
      {useMemoParams(SearchHome)}
    </Route>
    <Redirect to="/search/:keywords/单曲" />
  </Switch>
);
