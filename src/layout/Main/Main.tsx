import React, { memo, Suspense } from "react";
import Router from "@/router";
import DomLoading from "@/components/Loading";
import Nav from "./components/Nav";
import style from "./style.module.scss";

export default memo(() => (
  <div className="w-full flex flex-auto h-px">
    <Nav />
    <div className={style.split} />
    <div className="flex-1 w-0">
      <Suspense
        fallback={
          <div className="flex-center w-full h-full">
            <DomLoading />
          </div>
        }
      >
        <Router />
      </Suspense>
    </div>
  </div>
));
