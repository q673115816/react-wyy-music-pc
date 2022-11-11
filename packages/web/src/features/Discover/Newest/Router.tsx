import React, { memo } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Song from "./Song";
import Album from "./Album";

const Router = () => {
  return (
    <Routes>
      <Route path={`/*`} element={<Layout />}>
        <Route index element={<Navigate to="Song" replace={true} />} />
        <Route path={`Song/*`} element={<Song />} />
        <Route path={`Album/*`} element={<Album />} />
      </Route>
    </Routes>
  );
};

export default memo(Router);
