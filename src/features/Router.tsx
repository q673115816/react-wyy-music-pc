import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const requireContext = require.context(
  "./",
  true,
  /^\.\/.*\/Router\.tsx$/,
  "lazy"
);
// TODO ..... 需要更优雅的法
const importAll = async (context: __WebpackModuleApi.RequireContext) => {
  const keys = context.keys();
  const asyncModules = await Promise.all(keys.map(context));
  return asyncModules.map((module, index) => [
    keys[index].slice(2, -11),
    module.default,
  ]);
};

const root = await importAll(requireContext);
export default memo(function Features() {
  return (
    <Routes>
      {root.map(([path, Element]) => (
        <Route path={`${path}/*`} key={path} element={<Element />} />
      ))}
      <Route path={`*`} element={<Navigate to={"discover"} replace={true} />} />
    </Routes>
  );
});
