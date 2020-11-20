import React, { useEffect, useRef } from "react";
import DialogLogin from "../Dialog/Login";
export default ({ children, x, y }) => {
  return (
    <div
      id="NeteaseCloudMusic"
      className="domwrapper"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <DialogLogin />
      {children}
    </div>
  );
};
