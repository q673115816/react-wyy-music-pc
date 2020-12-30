import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const Setting = loadable(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = loadable(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const Video = loadable(() => import(/* webpackChunkName: "Video" */'@/pages/Video'));
const AllMv = loadable(() => import(/* webpackChunkName: "AllMv" */'@/pages/AllMv'));
const Local = loadable(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Cloud = loadable(() => import(/* webpackChunkName: "Cloud" */'@/pages/Cloud'));
const Look = loadable(() => import(/* webpackChunkName: "Look" */'@/pages/Look'));
const Download = loadable(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));
const Friend = loadable(() => import(/* webpackChunkName: "Friend" */'@/pages/Friend'));
const Love = loadable(() => import(/* webpackChunkName: "Love" */'@/pages/Love'));
const Dj = loadable(() => import(/* webpackChunkName: "Dj" */'@/pages/Dj'));
const ToplistArtist = loadable(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const Playlist = loadable(() => import(/* webpackChunkName: "Playlist" */'@/pages/Playlist'));
const User = loadable(() => import(/* webpackChunkName: "User" */'@/pages/User'));
const Sublist = loadable(() => import(/* webpackChunkName: "Sublist" */'@/pages/Sublist'));
const Artist = loadable(() => import(/* webpackChunkName: "Artist" */'@/pages/Artist'));
const Search = loadable(() => import(/* webpackChunkName: "Search" */'@/pages/Search'));

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/video" component={Video} />
    <Route path="/allmv" component={AllMv} />
    <Route path="/Look" component={Look} />
    <Route path="/local" component={Local} />
    <Route path="/cloud" component={Cloud} />
    <Route path="/download" component={Download} />
    <Route path="/friend" component={Friend} />
    <Route path="/dj" component={Dj} />
    <Route path="/love" component={Love} />
    <Route path="/sublist" component={Sublist} />
    <Route path="/artist/:id" component={Artist} />
    <Route path="/toplistartist/:type" component={ToplistArtist} />
    <Route path="/playlist" component={Playlist} />
    <Route path="/user" component={User} />
    <Route path="/search" component={Search} />
    <Route path="/settings" component={Setting} />
    <Redirect to="/home" />
  </Switch>
);
