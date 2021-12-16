import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DJ from "./DJ";
import TopList from "./TopList/TopList";
import TopListLayout from "./TopList/TopListLayout";

const Router = () => (
  <Routes>
    <Route path={"*"} element={<DJ />} />
    <Route path="TopList" element={<TopListLayout/>}>
      <Route path=":type" element={<TopList />}/>
      <Route index element={<Navigate to="program" replace={true}/>}/>
    </Route>
  </Routes>
);

export default memo(Router);
