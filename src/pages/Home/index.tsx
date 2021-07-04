import React, { lazy, memo, Suspense } from 'react';
import {
  NavLink, Switch, Route, Redirect,
} from 'react-router-dom';
import DomLoading from '@/components/Loading';
import useMemoParams from '@/custom/useMemoParams'

const HomeRecommend = lazy(() => import(/* webpackChunkName: "Home_Recommend" */'./Recommend'));
const HomeToplist = lazy(() => import(/* webpackChunkName: "Home_Toplist" */'./Toplist'));
const HomePlaylist = lazy(() => import(/* webpackChunkName: "Home_Playlist" */'./Playlist'));
const HomeArtist = lazy(() => import(/* webpackChunkName: "Home_Artist" */'./Artist'));
const HomeNewest = lazy(() => import(/* webpackChunkName: "Home_Newest" */'./Newest'));
const HomeDj = lazy(() => import(/* webpackChunkName: "Home_Dj" */'./Dj'));

const nav = [
  {
    to: '/home/recommend',
    path: '/home/recommend',
    name: '个性推荐',
    Children: HomeRecommend,
  },
  {
    to: '/home/playlist',
    path: '/home/playlist',
    name: '歌单',
    Children: HomePlaylist,
  },
  {
    to: '/home/dj',
    path: '/home/dj',
    name: '主播电台',
    Children: HomeDj,
  },
  {
    to: '/home/toplist',
    path: '/home/toplist',
    name: '排行榜',
    Children: HomeToplist,
  },
  {
    to: '/home/artist',
    path: '/home/artist',
    name: '歌手',
    Children: HomeArtist,
  },
  {
    to: '/home/newest',
    path: '/home/newest',
    name: '最新音乐',
    Children: HomeNewest,
  },
];
export default memo(() => (
  <div className="domHome flex flex-col h-full">
    <div className="domHome_nav ui_header text-base space-x-5">
      {nav.map(({ to, name }) => (
        <NavLink
          className="domHome_nav_link"
          activeClassName="text-xl font-bold ui_underline"
          to={to}
          key={name}
        >
          {name}
        </NavLink>
      ))}
    </div>
    <Suspense fallback={(
      <div className="flex-center w-full h-full">
        <DomLoading />
      </div>
    )}
    >
      <Switch>
        {
          nav.map(({ path, name, Children }) => (
            <Route path={path} key={name}>
              {useMemoParams(Children)}
            </Route>
          ))
        }
        <Redirect to="/home/recommend" />
      </Switch>
    </Suspense>
  </div>
));
