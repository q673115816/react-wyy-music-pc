import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const Setting = loadable(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const Video = loadable(() => import(/* webpackChunkName: "Video" */'@/pages/Video'));
const Local = loadable(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Download = loadable(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));

const ToplistArtist = loadable(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const Playlist = loadable(() => import(/* webpackChunkName: "Playlist" */'@/pages/Playlist'));
const User = loadable(() => import(/* webpackChunkName: "User" */'@/pages/User'));

export default () => (
  <Switch>
    <Route path="/video" component={Video} />
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
    <Route path="/playlist/:id" component={Playlist} />
    <Route path="/user" component={User} />
    <Route path="/settings">
      <Setting />
    </Route>
    <Redirect to="/home" />
  </Switch>
);
