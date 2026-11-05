import React, { memo } from "react";
import { createPortal } from "react-dom";
import useKeyActions from "./hooks/useKeyActions";
import "./styles/tailwind.css";
import "./styles/index.scss";
import Layout from "./Layout";
import Coffee from "./author/Coffee";
import Toast from "@/components/Toast";

const App = () => {
  useKeyActions();
  return (
    <>
      <Toast />
      <Layout />
      {createPortal(
        <Coffee />,
        document.querySelector("#author-root") as HTMLDivElement
      )}
    </>
  );
};

export default memo(App);
