import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Setting from '@/pages/setting';

import Home from '@/pages/Home';
import Play from '@/pages/Play';
import Local from '@/pages/Local';
import Download from '@/pages/Download';

import ToplistArtist from '@/pages/ToplistArtist';

export default () => (
  <Switch>
    <Route path="/play">
      <Play />
    </Route>
    <Route path="/local">
      <Local />
    </Route>
    <Route path="/download">
      <Download />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/toplistartist/:type">
      <ToplistArtist />
    </Route>
    <Route path="/settings">
      <Setting />
    </Route>
    <Redirect to="/home" />
  </Switch>
);
