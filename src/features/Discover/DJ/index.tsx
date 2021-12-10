import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import DJ from "./DJ";
import Top from "./Top";

const Router = () => (
  <Routes>
    <Route path={"*"} element={<DJ />} />
    <Route path="top/:type" element={<Top />} />
  </Routes>
);

export default memo(Router);
