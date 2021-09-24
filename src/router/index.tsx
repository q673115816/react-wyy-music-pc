import React, { lazy, memo, FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useMemoParams from "@/hooks/useMemoParams";

const Setting = lazy(
  () => import(/* webpackChunkName: "Setting" */ "@/pages/Setting")
);
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "@/pages/Home"));
const Exclusive = lazy(
  () => import(/* webpackChunkName: "Exclusive" */ "@/pages/Exclusive")
);
const DailySong = lazy(
  () => import(/* webpackChunkName: "DailySong" */ "@/pages/DailySong")
);
const Comment = lazy(
  () => import(/* webpackChunkName: "Comment" */ "@/pages/Comment")
);
const Video = lazy(
  () => import(/* webpackChunkName: "Video" */ "@/pages/Video")
);
const AllMV = lazy(
  () => import(/* webpackChunkName: "AllMV" */ "@/pages/AllMV")
);
const Cloud = lazy(
  () => import(/* webpackChunkName: "Cloud" */ "@/pages/Cloud")
);
const Look = lazy(() => import(/* webpackChunkName: "Look" */ "@/pages/Look"));
const Message = lazy(
  () => import(/* webpackChunkName: "Message" */ "@/pages/Message")
);
const Friend = lazy(
  () => import(/* webpackChunkName: "Friend" */ "@/pages/Friend")
);
const Love = lazy(() => import(/* webpackChunkName: "Love" */ "@/pages/Love"));
const DJ = lazy(() => import(/* webpackChunkName: "DJ" */ "@/pages/DJ"));
const DjCategory = lazy(
  () => import(/* webpackChunkName: "DjCategory" */ "@/pages/DjCategory")
);
const FM = lazy(() => import(/* webpackChunkName: "FM" */ "@/pages/FM"));
const History = lazy(
  () => import(/* webpackChunkName: "History" */ "@/pages/History")
);
const ToplistArtist = lazy(
  () => import(/* webpackChunkName: "ToplistArtist" */ "@/pages/ToplistArtist")
);
const ToplistMV = lazy(
  () => import(/* webpackChunkName: "ToplistMV" */ "@/pages/ToplistMV")
);
const Playlist = lazy(
  () => import(/* webpackChunkName: "Playlist" */ "@/pages/Playlist")
);
const User = lazy(() => import(/* webpackChunkName: "User" */ "@/pages/User"));
const Sublist = lazy(
  () => import(/* webpackChunkName: "Sublist" */ "@/pages/Sublist")
);
const Artist = lazy(
  () => import(/* webpackChunkName: "Artist" */ "@/pages/Artist")
);
const Search = lazy(
  () => import(/* webpackChunkName: "Search" */ "@/pages/Search")
);
const AI = lazy(() => import(/* webpackChunkName: "Ai" */ "@/pages/AI"));

const CustomShare = lazy(
  () => import(/* webpackChunkName: "CustomShare" */ "@/pages/CustomShare")
);

type routerProps = [string, FC][];

const router: routerProps = [
  ["/home", Home],
  ["/exclusive", Exclusive],
  ["/dailysong", DailySong],
  ["/comment/:type(song|mv|video)/:id", Comment],
  ["/video", Video],
  ["/allmv", AllMV],
  ["/Look", Look],
  ["/cloud", Cloud],
  ["/message", Message],
  ["/friend", Friend],
  ["/dj", DJ],
  ["/dj-category/:type/:rid", DjCategory],
  ["/FM", FM],
  ["/history", History],
  ["/love", Love],
  ["/sublist", Sublist],
  ["/artist/:id(\\d+)", Artist],
  ["/toplist-artist/:type", ToplistArtist],
  ["/toplist-mv", ToplistMV],
  ["/playlist", Playlist],
  ["/user", User],
  ["/search/:keywords/:type", Search],
  ["/search/:keywords", Search],
  ["/settings", Setting],
  ["/ai", AI],
  ["/hooks-share/:type/:id", CustomShare],
];

export default memo(() => (
  <Switch>
    {router.map(([path, Component]) => (
      <Route path={path} key={path}>
        {useMemoParams(Component)}
      </Route>
    ))}
    <Redirect to="/home" />
  </Switch>
));
