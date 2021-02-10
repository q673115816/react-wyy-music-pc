import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Setting = lazy(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const DailySong = lazy(() => import(/* webpackChunkName: "DailySong" */'@/pages/DailySong'));
const Comment = lazy(() => import(/* webpackChunkName: "Comment" */'@/pages/Comment'));
const Video = lazy(() => import(/* webpackChunkName: "Video" */'@/pages/Video'));
const AllMv = lazy(() => import(/* webpackChunkName: "AllMv" */'@/pages/AllMv'));
const Local = lazy(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Cloud = lazy(() => import(/* webpackChunkName: "Cloud" */'@/pages/Cloud'));
const Look = lazy(() => import(/* webpackChunkName: "Look" */'@/pages/Look'));
const Download = lazy(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));
const Friend = lazy(() => import(/* webpackChunkName: "Friend" */'@/pages/Friend'));
const Love = lazy(() => import(/* webpackChunkName: "Love" */'@/pages/Love'));
const Dj = lazy(() => import(/* webpackChunkName: "Dj" */'@/pages/Dj'));
const DjCategory = lazy(() => import(/* webpackChunkName: "DjCategory" */'@/pages/DjCategory'));
const Fm = lazy(() => import(/* webpackChunkName: "Fm" */'@/pages/Fm'));
const ToplistArtist = lazy(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const Playlist = lazy(() => import(/* webpackChunkName: "Playlist" */'@/pages/Playlist'));
const User = lazy(() => import(/* webpackChunkName: "User" */'@/pages/User'));
const Sublist = lazy(() => import(/* webpackChunkName: "Sublist" */'@/pages/Sublist'));
const Artist = lazy(() => import(/* webpackChunkName: "Artist" */'@/pages/Artist'));
const Search = lazy(() => import(/* webpackChunkName: "Search" */'@/pages/Search'));
const Ai = lazy(() => import(/* webpackChunkName: "Ai" */'@/pages/Ai'));

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/dailysong" component={DailySong} />
    <Route path="/comment/:id" component={Comment} />
    <Route path="/video" component={Video} />
    <Route path="/allmv" component={AllMv} />
    <Route path="/Look" component={Look} />
    <Route path="/local" component={Local} />
    <Route path="/cloud" component={Cloud} />
    <Route path="/download" component={Download} />
    <Route path="/friend" component={Friend} />
    <Route path="/dj" component={Dj} />
    <Route path="/dj-category/:id" component={DjCategory} />
    <Route path="/fm" component={Fm} />
    <Route path="/love" component={Love} />
    <Route path="/sublist" component={Sublist} />
    <Route path="/artist/:id" component={Artist} />
    <Route path="/toplistartist/:type" component={ToplistArtist} />
    <Route path="/toplistartist" component={ToplistArtist} />
    <Route path="/playlist" component={Playlist} />
    <Route path="/user" component={User} />
    <Route path="/search" component={Search} />
    <Route path="/settings" component={Setting} />
    <Route path="/ai" component={Ai} />
    <Redirect to="/home" />
  </Switch>
);
