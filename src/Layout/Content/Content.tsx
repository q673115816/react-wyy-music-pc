import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Left from "./components/Left";
import Center from "./components/Center";
import Right from "./components/Right";
import Nav from "./components/Nav";
import "./style.scss";
import style from "./style.module.scss";
import Features from "@/features/Router";
import classnames from "classnames";

const Content = () => (
  <div className={`flex flex-col flex-1 h-0`}>
    <div className="w-full flex flex-1 h-0">
      <Nav />
      <div className={classnames(style.split, "relative w-px flex-none")} />
      <div className="flex-1 w-0">
        <Features />
      </div>
    </div>
    <div className="footer flex flex-none">
      <Left />
      <Center />
      <Right />
    </div>
  </div>
);

export default memo(Content);
