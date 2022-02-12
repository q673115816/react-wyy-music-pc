import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "./Base/Layout";
import HighqualityLayout from "./Highquality/Layout";
import Highqualit from "./Highquality";
import Base from "./Base";

const Index = () => (
  <Routes>
    <Route path="highquality" element={<HighqualityLayout />} >
      <Route path={`:cat`} element={<Highqualit/>}/>
    </Route>
    <Route path=":cat" element={<BaseLayout />} >
      <Route path={`:page`} element={<Base/>}/>
      <Route index element={<Navigate to="1" replace={true} />} />
    </Route>
    <Route path="*" element={<Navigate to="全部歌单" replace={true} />} />
  </Routes>
);

export default memo(Index);
