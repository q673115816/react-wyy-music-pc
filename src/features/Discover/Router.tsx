import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Discover from "./Discover";
import Recommend from "./Recommend";
import Playlist from "./Playlist";
import Newest from "./Newest";
import TopList from "./TopList";
import Artist from "./Artist";
import DJ from "./DJ";
const Router = () => (
  <Routes>
    <Route element={<Discover />}>
      <Route path={`Recommend`} element={<Recommend />} />
      <Route path={`Playlist`} element={<Playlist />} />
      <Route path={`Newest`} element={<Newest />} />
      <Route path={`TopList`} element={<TopList />} />
      <Route path={`DJ`} element={<DJ />} />
      <Route path={`Artist`} element={<Artist />} />
      <Route
        path={`*`}
        element={<Navigate to={"recommend"} replace={true} />}
      />
    </Route>
  </Routes>
);

export default Router;
