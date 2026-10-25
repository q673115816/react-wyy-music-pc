import React from "react";
import { Routes, Route } from "react-router";

import DJCategory from "./DJCategory";

const router = () => (
  <Routes>
    <Route path={`:type/:rid`} element={<DJCategory />} />
  </Routes>
);

export default router;
