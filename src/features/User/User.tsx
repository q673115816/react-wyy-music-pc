import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

const User = () => {
  return (
    <div className="overflow-auto h-full flex-auto">
      <Outlet />
    </div>
  );
};

export default memo(User);
