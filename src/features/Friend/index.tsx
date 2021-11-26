import React, { lazy, Suspense, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "@/components/Loading";

const Friend = lazy(
  () => import(/* webpackChunkName: "Friend_My" */ "./Friend")
);
const Topic = lazy(
  () => import(/* webpackChunkName: "Friend_Topic" */ "./Topic")
);

export default memo(() => (
  <Suspense
    fallback={
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    }
  >
    <Routes>
      <Route index element={<Friend />} />
      <Route path=":id" element={<Topic />} />
    </Routes>
  </Suspense>
));
