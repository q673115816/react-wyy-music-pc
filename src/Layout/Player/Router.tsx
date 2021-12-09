import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Player from "./Player";

const Router = () => {
  return (
    <Routes>
      <Route path={`/:type/:vid`} element={<Player />} />
    </Routes>
  );
};

export default memo(Router);
