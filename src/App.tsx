import React, { lazy, memo } from "react";
import useIsLogin from "@/hooks/useIsLogin";
import useKeyActions from "./hooks/useKeyActions";
import "./styles/index.scss";
import Layout from "./layout";
import GlobalLrc from "./components/Lrc";

const App = () => {
  console.log("app");
  useKeyActions();
  useIsLogin();
  return (
    <>
      <Layout />
      <GlobalLrc />
    </>
  );
};

export default memo(App);
