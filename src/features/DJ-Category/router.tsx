import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const DJCategory = lazy(
  () => import(/* webpackChunkName: "DJCategory" */ "./DJCategory")
);

const router = () => (
  <Routes>
    <Route path={`:type/:rid`} element={<DJCategory />} />
  </Routes>
);

export default router;
