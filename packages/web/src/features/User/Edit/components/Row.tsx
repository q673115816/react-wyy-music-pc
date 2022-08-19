import React, { FC, memo, PropsWithChildren } from "react";

interface iProps extends PropsWithChildren {
  text?: string;
}

const Row: FC<iProps> = ({ text = "", children }) => {
  return (
    <div className="flex">
      <div className="leading-8 w-12">{text ? `${text}：` : ""}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default memo(Row);
