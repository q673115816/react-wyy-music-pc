import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import SubList from "./SubList";
import { navs } from "./config";
const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path=":path" element={<SubList />} />
        <Route index element={<Navigate to={navs[0]} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Router;
