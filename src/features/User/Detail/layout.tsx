import React, { createElement, FC, memo, useState } from "react";
import { Mains } from "./config";

interface iProps {
  list: [];
}

const Layout: FC<iProps> = ({ list = [], layout = "Grid" }) => {
  return <div className="pb-10">{createElement(Mains[layout], { list })}</div>;
};

export default memo(Layout);
