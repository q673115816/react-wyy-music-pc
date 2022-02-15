import React, { memo } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import NewestLayout from "./NewestLayout";
import SongLayout from "./SongLayout";
import Song from "./Song";
import Album from "./Album";

export default memo(function Router() {
  return (
    <Routes>
      <Route element={<NewestLayout />}>
        <Route path="song/*" element={<SongLayout />}>
          <Route path={`:type`} element={<Song />} />
          <Route path="*" element={<Navigate to="全部" replace={true} />} />
        </Route>
        <Route path="album" element={<Album />} />
        <Route path="*" element={<Navigate to="song" replace={true} />} />
      </Route>
    </Routes>
  );
});
