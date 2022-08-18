import React, { lazy, memo, Suspense, createElement, Fragment } from "react";
import { Navigate, Route, RouteObject, Routes } from "react-router-dom";
import Loading from "@/components/Loading";

const router: RouteObject[] = [];
const modules = import.meta.glob("./*/index.ts");
for (const path in modules) {
  router.push({
    path: path.slice(2, -8) + "*",
    element: lazy(modules[path]),
  });
}

const Features = () => {
  return (
    <Routes>
      {router.map(({ path, element = Fragment }) => (
        <Route
          path={path}
          key={path}
          element={
            <Suspense
              fallback={
                <div className="flex-center w-full h-full">
                  <Loading />
                </div>
              }
            >
              {createElement(element)}
            </Suspense>
          }
        />
      ))}
      <Route path={`*`} element={<Navigate to={"discover"} replace={true} />} />
    </Routes>
  );
};

export default memo(Features);
