import React, {memo} from "react";

const SmallHot = () => (
  <svg
    className="absolute left-full top-1/4 fill-current"
    viewBox="0 0 12 12"
    width="12"
    height="6"
  >
    <text
      dominantBaseline="middle"
      textAnchor="middle"
      x="0.5em"
      y="0.5em"
      className="fill-current ui_themeColor font-bold"
    >
      hot
    </text>
  </svg>
);

export default memo(SmallHot)
