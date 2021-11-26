import React from "react";
import { Routes, Route } from "react-router-dom";
import MVTopList from "./MV-TopList";
const Router = () => {
  return (
    <Routes>
      <Route index element={<MVTopList />} />
    </Routes>
  );
};

export default Router;
