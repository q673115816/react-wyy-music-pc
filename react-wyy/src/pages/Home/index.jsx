import React from 'react';
import {
  NavLink, Switch, Route, Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component';
// import HomeRecommend from './pages/Recommend';
// import HomeToplist from './pages/Toplist';
// import HomePlaylist from './pages/Playlist';
// import HomeArtist from './pages/Artist';
// import HomeNewest from './pages/Newest';
// import HomeDj from './pages/Dj';

const HomeRecommend = loadable(() => import(/* webpackChunkName: "Home_Recommend" */'./pages/Recommend'));
const HomeToplist = loadable(() => import(/* webpackChunkName: "Home_Toplist" */'./pages/Toplist'));
const HomePlaylist = loadable(() => import(/* webpackChunkName: "Home_Playlist" */'./pages/Playlist'));
const HomeArtist = loadable(() => import(/* webpackChunkName: "Home_Artist" */'./pages/Artist'));
const HomeNewest = loadable(() => import(/* webpackChunkName: "Home_Newest" */'./pages/Newest'));
const HomeDj = loadable(() => import(/* webpackChunkName: "Home_Dj" */'./pages/Dj'));

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
export default () => (
  <div className="domHome">
    <div className="domHome_nav">
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
    <div className="domHome_content">
      <Switch>
        <Route path="/home/recommend" component={HomeRecommend} />
        <Route path="/home/toplist" component={HomeToplist} />
        <Route path="/home/playlist" component={HomePlaylist} />
        <Route path="/home/artist" component={HomeArtist} />
        <Route path="/home/newest" component={HomeNewest} />
        <Route path="/home/dj" component={HomeDj} />
        <Redirect to="/home/recommend" />
      </Switch>
    </div>
  </div>
);
