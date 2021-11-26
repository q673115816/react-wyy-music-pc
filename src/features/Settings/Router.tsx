import React from "react";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Settings />} />
    </Routes>
  );
};

export default Router;
