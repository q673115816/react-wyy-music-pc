import React, { lazy, memo, Suspense } from 'react';
import {
  NavLink, Switch, Route, Redirect,
} from 'react-router-dom';
import './index.scss';

const HomeRecommend = lazy(() => import(/* webpackChunkName: "Home_Recommend" */'./Recommend'));
const HomeToplist = lazy(() => import(/* webpackChunkName: "Home_Toplist" */'./Toplist'));
const HomePlaylist = lazy(() => import(/* webpackChunkName: "Home_Playlist" */'./Playlist'));
const HomeArtist = lazy(() => import(/* webpackChunkName: "Home_Artist" */'./Artist'));
const HomeNewest = lazy(() => import(/* webpackChunkName: "Home_Newest" */'./Newest'));
const HomeDj = lazy(() => import(/* webpackChunkName: "Home_Dj" */'./Dj'));

const nav = [
  {
    path: '/home/recommend',
    name: '个性推荐',
  },
  {
    path: '/home/playlist',
    name: '歌单',
  },
  {
    path: '/home/dj',
    name: '主播电台',
  },
  {
    path: '/home/toplist',
    name: '排行榜',
  },
  {
    path: '/home/artist',
    name: '歌手',
  },
  {
    path: '/home/newest',
    name: '最新音乐',
  },
];
export default memo(() => (
  <div className="domHome flex flex-col h-full">
    <div className="domHome_nav ui_header">
      {nav.map((item) => (
        <NavLink
          className="domHome_nav_link"
          activeClassName="on"
          to={item.path}
          key={item.path}
        >
          {item.name}
        </NavLink>
      ))}

    </div>
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route path="/home/recommend" component={HomeRecommend} />
        <Route path="/home/toplist" component={HomeToplist} />
        <Route path="/home/playlist" component={HomePlaylist} />
        <Route path="/home/artist" component={HomeArtist} />
        <Route path="/home/newest" component={HomeNewest} />
        <Route path="/home/dj" component={HomeDj} />
        <Redirect to="/home/recommend" />
      </Switch>
    </Suspense>
  </div>
));
