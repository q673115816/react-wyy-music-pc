import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sublist from "./Sublist";
import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";

const Router = () => {
  return (
    <Routes>
      <Route element={<Sublist />}>
        <Route path="album" element={<Album />} />
        <Route path="artist" element={<Artist />} />
        <Route path="mv" element={<MV />} />
        <Route path="topic" element={<Topic />} />
        <Route path="*" element={<Navigate to="album" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Router;