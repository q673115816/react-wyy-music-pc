import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/components/Loading";

const requireContext = require.context(
  "./",
  true,
  /^\.\/.*\/Router\.tsx$/,
  "lazy"
);
const importALl = (context: __WebpackModuleApi.RequireContext) => {
  const keys = context.keys();
  const module = keys.map(context);
  return keys.map((path, index) => [
    path.slice(2, -11),
    lazy(() => module[index]),
  ]);
};
const root = await importALl(requireContext);
console.log(root);
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
