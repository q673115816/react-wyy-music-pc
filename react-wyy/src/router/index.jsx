import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
// import Setting from '@/pages/Setting';

// import Home from '@/pages/Home';
// import Play from '@/pages/Play';
// import Local from '@/pages/Local';
// import Download from '@/pages/Download';

// import ToplistArtist from '@/pages/ToplistArtist';
// import PlaylistDetail from '@/pages/PlaylistDetail';

const Setting = loadable(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const Play = loadable(() => import(/* webpackChunkName: "Play" */'@/pages/Play'));
const Local = loadable(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Download = loadable(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));

const ToplistArtist = loadable(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const PlaylistDetail = loadable(() => import(/* webpackChunkName: "PlaylistDetail" */'@/pages/PlaylistDetail'));
const User = loadable(() => import(/* webpackChunkName: "User" */'@/pages/User'));

export default () => (
  <Switch>
    <Route path="/play" component={Play} />
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
    <Route path="/playlistdetail/:id">
      <PlaylistDetail />
    </Route>
    <Route path="/user" component={User} />
    <Route path="/settings">
      <Setting />
    </Route>
    <Redirect to="/home" />
  </Switch>
);
