import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Friend from "./Friend";
import Topic from "./Topic";
import Top from "./Top";
import Acquaintance from "./Acquaintance";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Friend />} />
      <Route path="top" element={<Top />} />
      <Route path="Acquaintance" element={<Acquaintance />} />
      <Route path=":id" element={<Topic />} />
    </Routes>
  );
};

export default Router;
