import React from "react";
import { Routes, Route } from "react-router-dom";
import History from "./History";
const Router = () => {
  return (
    <Routes>
      <Route index element={<History />} />
    </Routes>
  );
};

export default Router;
