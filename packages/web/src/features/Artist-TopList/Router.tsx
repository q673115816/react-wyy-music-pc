import React from "react";
import { Routes, Route } from "react-router";
import ArtistTopList from "./ArtistTopList";
// 找不到入口了
const Router = () => {
  return (
    <Routes>
      <Route index element={<ArtistTopList />} />
    </Routes>
  );
};

export default Router;
