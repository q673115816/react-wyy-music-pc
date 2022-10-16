import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";
import style from "./CheckBox.module.scss";
import { IconCheck } from "@tabler/icons";

type iProps = {
  label?: ReactNode | null;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const CheckBox = (props, ref) => {
  const { label, className, ...other } = props;
  return (
    <label className="inline-flex items-center">
      <input
        ref={ref}
        type="checkbox"
        className={classNames(style.input, className)}
        hidden
        {...other}
      />
      <i className={`flex-center rounded-sm w-3 h-3 text-white border`}>
        <IconCheck size={14} />
      </i>
      {label}
    </label>
  );
};

export default forwardRef(CheckBox);
