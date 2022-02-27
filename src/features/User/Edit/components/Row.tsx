import React, { FC, memo } from "react";

interface iProps {
  text: string;
}

const Row: FC<iProps> = ({ text = "", children }) => {
  return (
    <div className="row flex">
      <div className="leading-8 w-12">{text ? `${text}：` : ""}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default memo(Row);
