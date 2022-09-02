import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import User from "./User";
import Detail from "./Detail";
import Dynamic from "./Dynamic";
import Follow from "./Follow";
import Fans from "./Fans";
import Record from "./Record";
import Edit from "./Edit";
import Binding from "./Binding";
import Layout from "./Layout";
import Redirect from "./Redirect";

const Router = () => (
  <Routes>
    <Route index element={<Layout />} />
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
    <Route path={`redirect`}>
      <Route index element={<Navigate to={`/`} replace />}></Route>
      <Route path={`:keywords`} element={<Redirect />} />
    </Route>
  </Routes>
);

export default Router;
