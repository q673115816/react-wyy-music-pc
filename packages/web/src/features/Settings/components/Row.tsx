import React, { FC, memo, PropsWithChildren } from "react";

interface iProps {
  title: string;
  tips?: string;
}

const Row: FC<PropsWithChildren<iProps>> = ({
  children,
  title = "未知项",
  tips,
}) => {
  return (
    <div>
      <div className="mb-2.5">
        <span>{title}：</span>
        <span className="text-gray-400">{tips}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default memo(Row);
