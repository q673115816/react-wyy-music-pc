import React, { forwardRef } from "react";
import style from "./editor.module.scss";
import classNames from "classnames";

const Editor = () => {
  return (
    <div
      contentEditable
      className={classNames(style.editor, "border p-2 focus:outline-none")}
    ></div>
  );
};

export default forwardRef(Editor);
