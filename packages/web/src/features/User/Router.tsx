import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import Detail from "./Detail";
import Dynamic from "./Dynamic";
import Follow from "./Follow";
import Fans from "./Fans";
import Record from "./Record";
import Edit from "./Edit";
import Binding from "./Binding";

const Router = () => (
  <Routes>
    <Route path={"/:uid"} element={<User />}>
      <Route index element={<Detail />} />
      <Route path={`Dynamic`} element={<Dynamic />} />
      <Route path={`Follow`} element={<Follow />} />
      <Route path={`Fans`} element={<Fans />} />
      <Route path={`Fans`} element={<Fans />} />
      <Route path={`Record`} element={<Record />} />
      <Route path={`Binding`} element={<Binding />} />
    </Route>
    <Route path={`Edit`} element={<Edit />} />
  </Routes>
);

export default Router;
