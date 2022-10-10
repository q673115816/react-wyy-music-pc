import React, { FC, memo, PropsWithChildren } from "react";

const Item: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`relative`}>{children}</div>;
};

export default memo(Item);
