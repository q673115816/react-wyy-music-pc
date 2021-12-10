import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Base from "./Base";
import Highquality from "./Highquality";

const Index = () => (
  <Routes>
    <Route path="highquality/:cat" element={<Highquality />} />
    <Route path=":cat/:page" element={<Base />} />
    <Route path="*" element={<Navigate to="全部歌单/1" />} />
  </Routes>
);

export default memo(Index);
