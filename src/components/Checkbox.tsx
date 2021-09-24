import React, {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useState,
} from "react";
import classNames from "classnames";
import { IconCheck } from "@tabler/icons";

interface CheckBoxProps {
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler;
}

export default memo<CheckBoxProps>(
  ({ name = "", checked = false, onChange }) => {
    return (
      <span className="inline-flex">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          hidden
        />
        <i
          className={classNames(
            "flex-center rounded w-4 h-4 text-white",
            checked ? "ui_theme_bg_color" : "border"
          )}
        >
          <IconCheck size={14} />
        </i>
      </span>
    );
  }
);
