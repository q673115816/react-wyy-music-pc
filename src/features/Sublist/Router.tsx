import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path={encodeURIComponent(`专辑`)} element={<Album />} />
        <Route path={encodeURIComponent(`歌手`)} element={<Artist />} />
        <Route path={encodeURIComponent(`视频`)} element={<MV />} />
        <Route path={encodeURIComponent(`专栏`)} element={<Topic />} />
      </Route>
    </Routes>
  );
};

export default Router;
