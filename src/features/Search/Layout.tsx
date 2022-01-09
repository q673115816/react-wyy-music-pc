import { Outlet } from "react-router-dom";
import React, { memo } from "react";

const Layout = () => {
  return <Outlet />;
};

export default memo(Layout);
