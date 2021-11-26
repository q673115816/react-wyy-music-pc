import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Features from "@/features/Router";
import Layout from "./Layout";
import Player from "./Player";
import Content from "./Content";

const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={"player/*"} element={<Player />} />
      <Route path="*" element={<Content />} />
    </Route>
  </Routes>
);

export default memo(Router);
