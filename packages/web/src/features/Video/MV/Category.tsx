import React, { FC, memo, useState } from "react";
import classNames from "classnames";
import { category } from "./types";

interface iProps {
  onClick: (area: string) => void;
  area: string;
}

const Category: FC<iProps> = ({ onClick, area }) => {
  return (
    <div className="flex divide-x gap-x-1">
      {category.map((item) => (
        <div className="item" key={item}>
          <button
            onClick={() => onClick(item)}
            type="button"
            className={classNames(
              "link rounded-full px-2.5",
              area === item ? "text-red-500 bg-red-50" : "ui_text_black_hover"
            )}
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default memo(Category);
