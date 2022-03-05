import React, { FC, memo } from "react";
import classNames from "classnames";
import Check from "./Check";

interface iProps {
  checked: boolean;
  onClick: () => void;
  color: string;
}

const Color: FC<iProps> = ({ checked = false, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames("relative rounded")}
      style={{ backgroundColor: color }}
    >
      {checked && <Check />}
    </button>
  );
};

export default memo(Color);
