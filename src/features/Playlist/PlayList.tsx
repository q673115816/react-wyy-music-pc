import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Music from "./Music";
import DJ from "./DJ";
import Album from "./Album";

export default memo(() => (
  <Routes>
    <Route path={`playlist`}>
      <Route path="music/:id" element={<Music />} />
      <Route path="dj/:id" element={<DJ />} />
      <Route path="album/:id" element={<Album />} />
    </Route>
    {/*<Route path="/playlist">
      <Music />
    </Route>*/}
  </Routes>
));
