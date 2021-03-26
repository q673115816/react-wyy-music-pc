import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchHome from './Home';

export default () => (
  <Switch>
    <Route path="/search/:keywords/:type">
      <SearchHome />
    </Route>
    <Redirect to="/search/:keywords/单曲" />
  </Switch>
);
