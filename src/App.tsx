import React, { memo, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resizer from "@/components/Resizer";
import useMemoParmas from "@/hooks/useMemoParams";
import useIsLogin from "@/hooks/useIsLogin";
import Loading from "@/components/Loading";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Inset from "./layout/Inset";
import useKeyActions from "./hooks/useKeyActions";
import "./styles/index.scss";

import GlobalLrc from "./components/Lrc";
import Help from "./Help";
import { useAppSelector } from "@/reducers/hooks";

const Player = lazy(
  () =>
    import(
      /* webpackChunkName: "Player" */
      "@/pages/Player"
    )
);

export default memo(() => {
  console.log("app");
  useKeyActions();
  useIsLogin();

  return (
    <>
      <Inset>
        <Header />
        <Suspense
          fallback={
            <div className="flex-center w-full h-full">
              <Loading />
            </div>
          }
        >
          <Switch>
            <Route path="/player/:type(video|mv)/:vid">
              {useMemoParmas(Player)}
            </Route>
            <Route>
              <Main />
              <Footer />
            </Route>
          </Switch>
          <Help />
        </Suspense>
        <Resizer />
      </Inset>
      <GlobalLrc />
    </>
  );
});
