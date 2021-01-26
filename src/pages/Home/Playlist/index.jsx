import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DomHome from './Home';
import DomHighquality from './Highquality';

export default () => (
  <Switch>
    <Route path="/home/playlist/highquality" component={DomHighquality} />
    <Route path="/home/playlist" component={DomHome} />
  </Switch>
);
