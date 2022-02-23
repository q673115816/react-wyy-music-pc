import React, { FC, memo } from "react";

interface iProps {
  title: string;
  tips?: string;
}

const Row: FC<iProps> = ({ children, title = "未知项", tips }) => {
  return (
    <div className="mt-6">
      <div className="mb-2.5">
        <span>{title}：</span>
        <span className="text-gray-400">{tips}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default memo(Row);
