import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Resizer from "./Resizer";
import Header from "./Header";
import Inset from "./Inset";
import Help from "./Help";
import Lrc from "./Lrc";
import GlobalLrc from "@/components/Lrc";

const Layout = () => {
  return (
    <Inset>
      <Header />
      <Outlet />
      <Lrc />
      <Help />
      <Resizer />
      <GlobalLrc />
    </Inset>
  );
};
export default memo(Layout);
