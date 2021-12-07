import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/components/Loading";
const root = [];
const requireContext = require.context("./", true, /^\.\/.*\/Router\.tsx$/);
requireContext.keys().forEach((path) => {
  root.push([path.slice(2, -11), requireContext(path).default]);
});

export default memo(function Features() {
  return (
    <Routes>
      {root.map(([path, Element]) => (
        <Route
          path={`${path}/*`}
          key={path}
          element={
            <Suspense
              fallback={
                <div className="flex-center w-full h-full">
                  <Loading />
                </div>
              }
            >
              <Element />
            </Suspense>
          }
        />
      ))}
      <Route path={`*`} element={<Navigate to={"discover"} replace={true} />} />
    </Routes>
  );
});
