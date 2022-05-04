import React, { useContext } from "react";
import classNames from "classnames";
import { IconCircleCheck } from "@tabler/icons";
import { context } from "./Content";

const Toast = () => {
  const [{ id, text }] = useContext(context);
  if (!text) return null;
  return (
    <div
      style={{ minWidth: 270 }}
      className={classNames(
        "absolute h-20 w-min z-50 whitespace-nowrap px-4 inset-0 m-auto flex-center rounded-lg bg-black bg-opacity-80 text-gray-200 text-lg"
      )}
    >
      <IconCircleCheck size={24} />
      &nbsp;
      {text}
    </div>
  );
};

export default Toast;
