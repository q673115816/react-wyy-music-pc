import React, { memo } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Artist from "./Artist";
import Newest from "./Newest";
import Playlist from "./Playlist";
import Recommend from "./Recommend";
import TopList from "./TopList";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={"Recommend"} replace={true} />} />
      <Route path="/*" element={<Layout />}>
        <Route path={"Recommend/*"} element={<Recommend />} />
        <Route path={"Playlist/*"} element={<Playlist />} />
        <Route path={"TopList"} element={<TopList />} />
        <Route path={"Artist"} element={<Artist />} />
        <Route path={"Newest/*"} element={<Newest />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
