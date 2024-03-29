import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Music from "./Music";
import DJ from "./DJ";
import Album from "./Album";

const Router = () => {
  return (
    <Routes>
      <Route path="music/:id" element={<Music />} />
      <Route path="dj/:id" element={<DJ />} />
      <Route path="album/:id" element={<Album />} />
    </Routes>
  );
};

export default memo(Router);
