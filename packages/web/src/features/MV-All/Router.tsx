import React from "react";
import { Routes, Route } from "react-router";
import MVAll from "./MV-All";
const Router = () => {
  return (
    <Routes>
      <Route index element={<MVAll />} />
    </Routes>
  );
};

export default Router;
