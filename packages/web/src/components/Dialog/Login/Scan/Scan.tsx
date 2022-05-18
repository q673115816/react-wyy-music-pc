import React, { memo } from "react";
import Content from "./Content";
import "./scan.scss";

const Scan = () => (
  <div className={"qr pt-24 flex items-center flex-col"}>
    <div className="title text-2xl">扫码登录</div>
    <Content />
  </div>
);

export default memo(Scan);
