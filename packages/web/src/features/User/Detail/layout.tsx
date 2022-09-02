import React, { createElement, FC, memo, PropsWithChildren } from "react";
import { Mains } from "./config";

interface iProps extends PropsWithChildren {
  list: [];
  layout: string;
}

const Layout: FC<iProps> = ({ list = [], layout = "Grid", children }) => {
  return (
    <div className="pb-10">
      {createElement(Mains[layout], { list, children })}
    </div>
  );
};

export default memo(Layout);
