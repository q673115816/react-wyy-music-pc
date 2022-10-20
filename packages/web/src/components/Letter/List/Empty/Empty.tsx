import React, { FC, memo } from "react";
import style from "./empty.module.scss";

interface iProps {
  active: string;
}

const Empty: FC<iProps> = ({ active }) => {
  return (
    <div className={style.empty}>
      暂无
      {active}
      内容
    </div>
  );
};

export default memo(Empty);
