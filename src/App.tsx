import React, { lazy, memo } from "react";
import { createPortal } from "react-dom";
import useIsLogin from "@/hooks/useIsLogin";
import useKeyActions from "./hooks/useKeyActions";
import "./styles/index.scss";
import Layout from "./Layout";
import GlobalLrc from "./components/Lrc";
import Coffee from "./author/Coffee";

const App = () => {
  console.log("app");
  useKeyActions();
  useIsLogin();
  return (
    <>
      <Layout />
      <GlobalLrc />
      {createPortal(
        <Coffee />,
        document.querySelector("#author-root") as HTMLDivElement
      )}
    </>
  );
};

export default memo(App);
