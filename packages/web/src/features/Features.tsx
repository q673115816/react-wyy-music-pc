import React, { lazy, LazyExoticComponent, memo, Suspense } from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import Loading from "@/components/Loading";

const root: [string, LazyExoticComponent<any>][] = [
  ["AI", lazy(() => import(/* webpackChunkName: "AI" */ "./AI"))],
  ["Artist", lazy(() => import(/* webpackChunkName: "Artist" */ "./Artist"))],
  [
    "Artist-TopList",
    lazy(
      () => import(/* webpackChunkName: "Artist-TopList" */ "./Artist-TopList")
    ),
  ],
  ["Cloud", lazy(() => import(/* webpackChunkName: "Cloud" */ "./Cloud"))],
  [
    "Comment",
    lazy(() => import(/* webpackChunkName: "Comment" */ "./Comment")),
  ],
  [
    "Daily-Song",
    lazy(() => import(/* webpackChunkName: "Daily-Song" */ "./Daily-Song")),
  ],
  [
    "Discover",
    lazy(() => import(/* webpackChunkName: "Discover" */ "./Discover")),
  ],
  ["DJ", lazy(() => import(/* webpackChunkName: "DJ" */ "./DJ"))],
  [
    "DJ-Category",
    lazy(() => import(/* webpackChunkName: "DJ-Category" */ "./DJ-Category")),
  ],
  [
    "Exclusive",
    lazy(() => import(/* webpackChunkName: "Exclusive" */ "./Exclusive")),
  ],
  ["FM", lazy(() => import(/* webpackChunkName: "FM" */ "./FM"))],
  ["Friend", lazy(() => import(/* webpackChunkName: "Friend" */ "./Friend"))],
  [
    "History",
    lazy(() => import(/* webpackChunkName: "History" */ "./History")),
  ],
  // ["Look", lazy(() => import(/* webpackChunkName: "Look" */ "./Look"))],
  [
    "Message",
    lazy(() => import(/* webpackChunkName: "Message" */ "./Message")),
  ],
  ["MV-All", lazy(() => import(/* webpackChunkName: "MV-All" */ "./MV-All"))],
  [
    "MV-TopList",
    lazy(() => import(/* webpackChunkName: "MV-TopList" */ "./MV-TopList")),
  ],
  [
    "Playlist",
    lazy(() => import(/* webpackChunkName: "Playlist" */ "./Playlist")),
  ],
  ["Search", lazy(() => import(/* webpackChunkName: "Search" */ "./Search"))],
  [
    "Settings",
    lazy(() => import(/* webpackChunkName: "Settings" */ "./Settings")),
  ],
  ["Share", lazy(() => import(/* webpackChunkName: "Share" */ "./Share"))],
  [
    "Sublist",
    lazy(() => import(/* webpackChunkName: "Sublist" */ "./Sublist")),
  ],
  ["User", lazy(() => import(/* webpackChunkName: "User" */ "./User"))],
  ["Video", lazy(() => import(/* webpackChunkName: "Video" */ "./Video"))],
  [
    "HighQuality",
    lazy(() => import(/* webpackChunkName: "HighQuality" */ "./HighQuality")),
  ],
];
// const modules = import.meta.glob("./*/index.ts", { eager: true }) || [];
// console.log(modules);
export default memo(function Features() {
  return (
    <Routes>
      {root.map(([path, Element]) => (
        <Route
          path={`${path}/*`}
          key={path}
          element={
            <Suspense
              fallback={
                <div className="flex-center w-full h-full">
                  <Loading />
                </div>
              }
            >
              <Element />
            </Suspense>
          }
        />
      ))}
      <Route path={`*`} element={<Navigate to={"discover"} replace={true} />} />
    </Routes>
  );
});

// const AI = lazy(() => import(/* webpackChunkName: "AI" */ "./AI"));
// const Artist = lazy(() => import(/* webpackChunkName: "Artist" */ "./Artist"));
// const ArtistTopList = lazy(
//   () => import(/* webpackChunkName: "Artist-TopList" */ "./Artist-TopList")
// );
// const Cloud = lazy(() => import(/* webpackChunkName: "Cloud" */ "./Cloud"));
// const Comment = lazy(
//   () => import(/* webpackChunkName: "Comment" */ "./Comment")
// );
// const DailySong = lazy(
//   () => import(/* webpackChunkName: "Daily-Song" */ "./Daily-Song")
// );
// const Discover = lazy(
//   () => import(/* webpackChunkName: "Discover" */ "./Discover")
// );
// const DJCategory = lazy(
//   () => import(/* webpackChunkName: "DJ-Category" */ "./DJ-Category")
// );
// const Exclusive = lazy(
//   () => import(/* webpackChunkName: "Exclusive" */ "./Exclusive")
// );
// const FM = lazy(() => import(/* webpackChunkName: "FM" */ "./FM"));
// const Friend = lazy(() => import(/* webpackChunkName: "Friend" */ "./Friend"));
// const History = lazy(
//   () => import(/* webpackChunkName: "History" */ "./History")
// );
// const Message = lazy(
//   () => import(/* webpackChunkName: "Message" */ "./Message")
// );
// const MVAll = lazy(() => import(/* webpackChunkName: "MV-All" */ "./MV-All"));
// const MVTopList = lazy(
//   () => import(/* webpackChunkName: "MV-TopList" */ "./MV-TopList")
// );
// const Playlist = lazy(
//   () => import(/* webpackChunkName: "Playlist" */ "./Playlist")
// );
// const Search = lazy(() => import(/* webpackChunkName: "Search" */ "./Search"));
// const Settings = lazy(
//   () => import(/* webpackChunkName: "Settings" */ "./Settings")
// );
// const Share = lazy(() => import(/* webpackChunkName: "Share" */ "./Share"));
// const Sublist = lazy(
//   () => import(/* webpackChunkName: "Sublist" */ "./Sublist")
// );
// const User = lazy(() => import(/* webpackChunkName: "User" */ "./User"));
// const Video = lazy(() => import(/* webpackChunkName: "Video" */ "./Video"));
//
// export default memo(() =>
//   useRoutes([
//     {
//       path: "AI/*",
//       element: <AI />,
//     },
//     {
//       path: "Artist/*",
//       element: <Artist />,
//     },
//     {
//       path: "Artist-TopList/*",
//       element: <ArtistTopList />,
//     },
//     {
//       path: "Cloud/*",
//       element: <Cloud />,
//     },
//     {
//       path: "Comment/*",
//       element: <Comment />,
//     },
//     {
//       path: "Daily-Song/*",
//       element: <DailySong />,
//     },
//     {
//       path: "Discover/*",
//       element: <Discover />,
//     },
//     {
//       path: "DJ-Category/*",
//       element: <DJCategory />,
//     },
//     {
//       path: "Exclusive/*",
//       element: <Exclusive />,
//     },
//     {
//       path: "FM/*",
//       element: <FM />,
//     },
//     {
//       path: "Friend/*",
//       element: <Friend />,
//     },
//     {
//       path: "History/*",
//       element: <History />,
//     },
//     {
//       path: "Message/*",
//       element: <Message />,
//     },
//     {
//       path: "MV-All/*",
//       element: <MVAll />,
//     },
//     {
//       path: "MV-TopList/*",
//       element: <MVTopList />,
//     },
//     {
//       path: "Playlist/*",
//       element: <Playlist />,
//     },
//     {
//       path: "Search/*",
//       element: <Search />,
//     },
//     {
//       path: "Settings/*",
//       element: <Settings />,
//     },
//     {
//       path: "Share/*",
//       element: <Share />,
//     },
//     {
//       path: "Sublist/*",
//       element: <Sublist />,
//     },
//     {
//       path: "User/*",
//       element: <User />,
//     },
//     {
//       path: "Video/*",
//       element: <Video />,
//     },
//     {
//       path: "*",
//       element: <Navigate to={"discover"} replace={true} />,
//     },
//   ])
// );
