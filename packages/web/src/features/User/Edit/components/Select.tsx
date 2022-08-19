import React, { ChangeEventHandler, FC, memo, PropsWithChildren } from "react";

interface iProps extends PropsWithChildren {
  value: string | number;
  onChange: ChangeEventHandler;
}

const Select: FC<iProps> = ({ children, value, onChange }) => {
  return (
    <select
      className="h-8 px-1.5 rounded border"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default memo(Select);
