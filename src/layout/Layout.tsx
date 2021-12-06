import React, { memo, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Resizer from "@/components/Resizer";
import Loading from "@/components/Loading";
import Header from "./Header";
import Inset from "./Inset";

const Help = lazy(
  () =>
    import(
      /* webpackChunkName: "Lrc" */
      "./Help"
    )
);
const Lrc = lazy(
  () =>
    import(
      /* webpackChunkName: "Lrc" */
      "./Lrc"
    )
);
const Layout = () => {
  return (
    <Inset>
      <Header />
      <Outlet />
      <Suspense
        fallback={
          <div className="flex-center w-full h-full">
            <Loading />
          </div>
        }
      >
        <Lrc />
        <Help />
      </Suspense>
      <Resizer />
    </Inset>
  );
};
export default memo(Layout);
