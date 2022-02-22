import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { navs } from "./config";
import Layout from "./Layout";
import Sublist from "./Sublist";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path=":path" element={<Sublist />} />
        <Route index element={<Navigate to={navs[0]} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Router;
