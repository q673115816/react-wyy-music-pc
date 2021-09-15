import React, { memo, Suspense } from "react";
import Router from "@/router";
import DomLoading from "@/components/Loading";
import DomNav from "./components/Nav";
import style from "./style.module.scss";

export default memo(() => (
  <div className="dommain w-full flex flex-auto h-px">
    <DomNav />
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
