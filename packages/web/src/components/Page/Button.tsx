import classNames from "classnames";
import { btnProps } from "./types";
import React, { FC, memo } from "react";

const Button: FC<btnProps> = ({
  handleClick = () => void 0,
  status = false,
  current = false,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={status || current ? undefined : handleClick}
      className={classNames(
        "border px-2 h-6 flex-center rounded",
        status ? "cursor-auto text-gray-500" : "hover:bg-gray-200",
        current && "cursor-auto ui_theme_bg_color text-white"
      )}
    >
      {children}
    </button>
  );
};
export default memo(Button);
