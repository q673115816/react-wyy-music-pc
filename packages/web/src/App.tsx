import React, { memo } from "react";
import { createPortal } from "react-dom";
import useIsLogin from "@/hooks/useIsLogin";
import useKeyActions from "./hooks/useKeyActions";
import "./styles/tailwind.scss";
import "./styles/index.scss";
import Layout from "./Layout";
import Coffee from "./author/Coffee";
import Toast from "@/components/Toast";

const App = () => {
  useKeyActions();
  useIsLogin();
  return (
    <Toast.Provider>
      <Layout />
      {createPortal(
        <Coffee />,
        document.querySelector("#author-root") as HTMLDivElement
      )}
    </Toast.Provider>
  );
};

export default memo(App);
