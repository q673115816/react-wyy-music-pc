import React, {
  FC,
  memo,
  PropsWithChildren,
  SelectHTMLAttributes,
} from "react";

const Select: FC<
  PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>
> = ({ children, ...props }) => {
  return (
    <select className={`h-6 border`} {...props}>
      {children}
    </select>
  );
};

export default memo(Select);
