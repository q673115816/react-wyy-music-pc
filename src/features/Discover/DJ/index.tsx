import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import DJ from "./DJ";
import Top from "./Top";

export default memo(() => (
  <Routes>
    <Route path="/home/dj/top/:type?" element={<Top />} />
    <Route path="/home/dj" element={<DJ />} />
  </Routes>
));
