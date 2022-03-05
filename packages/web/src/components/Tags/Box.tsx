import classNames from "classnames";
import React, { FC, memo } from "react";

interface iBox {
  text: string;
  className?: string | [];
}

const Box: FC<iBox> = ({ children, text = "MV", className }) => (
  <svg
    className={classNames(
      "border w-5 h-3 border-current rounded-sm ui_themeColor",
      className
    )}
  >
    <text
      className="fill-current font-bold"
      x="50%"
      y="50%"
      fontSize="8"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {text}
    </text>
    {children}
  </svg>
);

export default memo(Box);
