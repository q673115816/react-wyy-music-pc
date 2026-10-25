import React from "react";
import { Routes, Route } from "react-router";
import Exclusive from "./Exclusive";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Exclusive />} />
    </Routes>
  );
};

export default Router;
