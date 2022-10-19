import React, { FC, memo, MouseEventHandler, useRef, useState } from "react";
import style from "./atselect.module.scss";
import classNames from "classnames";
import { useClickAway } from "react-use";

interface iProps {
  setVisibility: (bool: boolean) => void;
}

const AtSelect: FC<iProps> = ({ setVisibility }) => {
  const ref = useRef(null);
  const handleClose = () => {
    setVisibility(false);
  };
  useClickAway(ref, handleClose);
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    //
  };
  const [list, setList] = useState(["小秘书"]);
  return (
    <div
      ref={ref}
      contentEditable={false}
      className={classNames(
        style.atSelect,
        "position border shadow bg-white h-min"
      )}
    >
      <div
        className={`h-6 flex items-center px-2 text-gray-500`}
        onClick={handleClose}
      >
        选择最近@的人或直接输入
      </div>
      {list.map((name) => (
        <div
          key={name}
          className={`h-6 flex items-center px-2 hover:bg-gray-100 cursor-pointer`}
          onClick={handleClick}
        >
          小秘书
        </div>
      ))}
    </div>
  );
};

export default memo(AtSelect);
