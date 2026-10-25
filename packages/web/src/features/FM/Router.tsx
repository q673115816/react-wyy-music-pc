import React from "react";
import { Routes, Route } from "react-router";
import FM from "./FM";
const Router = () => {
  return (
    <Routes>
      <Route index element={<FM />} />
    </Routes>
  );
};

export default Router;
