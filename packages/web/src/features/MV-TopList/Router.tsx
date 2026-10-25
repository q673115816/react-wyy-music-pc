import React from "react";
import { Routes, Route } from "react-router";
import MVTopList from "./MV-TopList";
const Router = () => {
  return (
    <Routes>
      <Route index element={<MVTopList />} />
    </Routes>
  );
};

export default Router;
