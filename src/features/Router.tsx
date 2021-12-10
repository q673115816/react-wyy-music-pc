import React, { lazy, LazyExoticComponent, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/components/Loading";
import Discover from "./Discover";
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
  ["Look", lazy(() => import(/* webpackChunkName: "Look" */ "./Look"))],
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
];
// const requireContext = require.context("./", true, /^\.\/.*\/Router\.tsx$/);
// requireContext.keys().forEach((path) => {
//   root.push([path.slice(2, -11), requireContext(path).default]);
// });

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
