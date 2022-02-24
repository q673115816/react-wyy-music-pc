import React, { FC, memo } from "react";

interface iProps {
  label: string;
}

const Row: FC<iProps> = ({ label, children }) => {
  return (
    <div className="row flex">
      <div className="leading-8 w-12">{label ? `${label}：` : ""}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default memo(Row);
