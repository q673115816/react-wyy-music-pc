import classNames from "classnames";
import React, { FC, memo } from "react";
import { iArrowProps } from "./types";

const Arrow: FC<iArrowProps> = ({ onClick, children, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(
      "absolute inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto",
      className
    )}
  >
    {children}
  </button>
);

export default memo(Arrow);
