import React, { forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames";
import style from "./CheckBox.module.scss";
import { IconCheck } from "@tabler/icons";

const CheckBox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <label className="inline-flex items-center">
      <input
        ref={ref}
        type="checkbox"
        className={classNames(style.input, className)}
        hidden
        {...other}
      />
      <i className={`flex-center rounded-sm w-4 h-4 text-white border`}>
        <IconCheck size={14} />
      </i>
      <span className={"ml-2"}>{children}</span>
    </label>
  );
});

export default CheckBox;
