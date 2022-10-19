import React, { FC, memo, MouseEventHandler, useRef, useState } from "react";
import { useClickAway } from "react-use";
import style from "./hashselect.module.scss";
import classNames from "classnames";

interface iProps {
  setVisibility: (bool: boolean) => void;
}

const HashSelect: FC<iProps> = ({ setVisibility }) => {
  const ref = useRef(null);
  const handleClose = () => {
    setVisibility(false);
  };
  useClickAway(ref, handleClose);
  const [list, setList] = useState(["小秘书"]);
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    //
  };
  return (
    <div
      ref={ref}
      contentEditable={false}
      className={classNames(
        style.hashSelect,
        "position border shadow bg-white h-min rounded"
      )}
    >
      <div
        className={`border-b text-gray-500 px-4 h-9 flex items-center`}
        onClick={handleClose}
      >
        为您推荐
      </div>
      {list.map((name) => (
        <div
          key={name}
          className={`px-4 h-9 flex items-center hover:bg-gray-100  cursor-pointer`}
          onClick={handleClick}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default memo(HashSelect);
