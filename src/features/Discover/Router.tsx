import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Discover from "./Discover";
import { elements } from "./config";

const Router = () => (
  <Routes>
    <Route path={`/*`} element={<Discover />}>
      {elements.map(([path, Element]) => (
        <Route path={path + "/*"} key={path} element={<Element />} />
      ))}
      {/*<Route path={encodeURIComponent(`个性推荐`)} element={<Recommend />} />
      <Route path={`专属定制/*`} element={<DJ />} />
      <Route path={`歌单/*`} element={<Playlist />} />
      <Route path={`排行榜`} element={<TopList />} />
      <Route path={`歌手`} element={<Artist />} />
      <Route path={`最新音乐/*`} element={<Newest />} />*/}
      <Route index element={<Navigate to={elements[0][0]} replace={true} />} />
    </Route>
  </Routes>
);

export default Router;
