import React, { FC, memo, PropsWithChildren } from "react";
import style from "./Submit.module.scss";

const Submit: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <button type="submit" className={style.submit}>
      {children}
    </button>
  );
};

export default memo(Submit);
