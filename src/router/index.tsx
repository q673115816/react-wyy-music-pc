import { lazy, memo, FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useMemoParams from '@/custom/useMemoParams'

const Setting = lazy(() => import(/* webpackChunkName: "Setting" */'@/pages/Setting'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */'@/pages/Home'));
const Exclusive = lazy(() => import(/* webpackChunkName: "Exclusive" */'@/pages/Exclusive'));
const DailySong = lazy(() => import(/* webpackChunkName: "DailySong" */'@/pages/DailySong'));
const Comment = lazy(() => import(/* webpackChunkName: "Comment" */'@/pages/Comment'));
const Video = lazy(() => import(/* webpackChunkName: "Video" */'@/pages/Video'));
const AllMV = lazy(() => import(/* webpackChunkName: "AllMV" */'@/pages/AllMV'));
const Local = lazy(() => import(/* webpackChunkName: "Local" */'@/pages/Local'));
const Cloud = lazy(() => import(/* webpackChunkName: "Cloud" */'@/pages/Cloud'));
const Look = lazy(() => import(/* webpackChunkName: "Look" */'@/pages/Look'));
const Download = lazy(() => import(/* webpackChunkName: "Download" */'@/pages/Download'));
const Friend = lazy(() => import(/* webpackChunkName: "Friend" */'@/pages/Friend'));
const Love = lazy(() => import(/* webpackChunkName: "Love" */'@/pages/Love'));
const Dj = lazy(() => import(/* webpackChunkName: "Dj" */'@/pages/Dj'));
const DjCategory = lazy(() => import(/* webpackChunkName: "DjCategory" */'@/pages/DjCategory'));
const Fm = lazy(() => import(/* webpackChunkName: "Fm" */'@/pages/Fm'));
const History = lazy(() => import(/* webpackChunkName: "History" */'@/pages/History'));
const ToplistArtist = lazy(() => import(/* webpackChunkName: "ToplistArtist" */'@/pages/ToplistArtist'));
const ToplistMV = lazy(() => import(/* webpackChunkName: "ToplistMV" */'@/pages/ToplistMV'));
const Playlist = lazy(() => import(/* webpackChunkName: "Playlist" */'@/pages/Playlist'));
const User = lazy(() => import(/* webpackChunkName: "User" */'@/pages/User'));
const Sublist = lazy(() => import(/* webpackChunkName: "Sublist" */'@/pages/Sublist'));
const Artist = lazy(() => import(/* webpackChunkName: "Artist" */'@/pages/Artist'));
const Search = lazy(() => import(/* webpackChunkName: "Search" */'@/pages/Search'));
const AI = lazy(() => import(/* webpackChunkName: "Ai" */'@/pages/AI'));


const CustomShare = lazy(() => import(/* webpackChunkName: "CustomShare" */'@/pages/CustomShare'));


type routerProps = [string, FunctionComponent][]

const router: routerProps = [
  ['/home', Home],
  ['/exclusive', Exclusive],
  ['/dailysong', DailySong],
  ['/comment/:type(song|mv|video)/:id', Comment],
  ['/video', Video],
  ['/allmv', AllMV],
  ['/Look', Look],
  ['/local', Local],
  ['/cloud', Cloud],
  ['/download', Download],
  ['/friend', Friend],
  ['/dj', Dj],
  ['/dj-category/:type/:rid', DjCategory],
  ['/fm', Fm],
  ['/history', History],
  ['/love', Love],
  ['/sublist', Sublist],
  ['/artist/:id(\\d+)', Artist],
  ['/toplist-artist/:type', ToplistArtist],
  ['/toplist-mv', ToplistMV],
  ['/playlist', Playlist],
  ['/user', User],
  ['/search/:keywords/:type', Search],
  ['/search/:keywords', Search],
  ['/settings', Setting],
  ['/ai', AI],
  ['/custom-share/:type/:id', CustomShare],
];

export default memo(() => (
  <Switch>
    {
      router.map(([path, Component]) => (
        <Route path={path} key={path}>
          {useMemoParams(Component)}
        </Route>
      ))
    }
    <Redirect to="/home" />
  </Switch>
));
