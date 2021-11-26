import React from "react";
import { Routes, Route } from "react-router-dom";
import DJ from "./DJ";
const Router = () => {
  return (
    <Routes>
      <Route index element={<DJ />} />
    </Routes>
  );
};

export default Router;
