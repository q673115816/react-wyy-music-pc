import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "./Base/Layout";
import HighQualityLayout from "./HighQuality/Layout";
import HighQuality from "./HighQuality";
import Base from "./Base";

const Index = () => (
  <Routes>
    <Route path="highQuality" element={<HighQualityLayout />}>
      <Route path={`:cat`} element={<HighQuality />} />
    </Route>
    <Route path=":cat" element={<BaseLayout />}>
      <Route path={`:page`} element={<Base />} />
      <Route index element={<Navigate to="1" replace={true} />} />
    </Route>
    <Route path="*" element={<Navigate to="全部歌单" replace={true} />} />
  </Routes>
);

export default memo(Index);
