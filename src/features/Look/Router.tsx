import React from "react";
import { Routes, Route } from "react-router-dom";
import Look from "./Look";
import Home from "./Home";
import Live from "./Live";
import Room from "./Room";

const Router = () => {
  return (
    <Routes>
      <Route element={<Look />}>
        <Route index element={<Home />} />
        <Route path={`my`} element={<Live />} />
        <Route path={`:id`} element={<Room />} />
      </Route>
    </Routes>
  );
};

export default Router;
