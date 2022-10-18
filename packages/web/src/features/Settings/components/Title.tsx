import React, { FC, memo, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`text-sm font-bold`}>{children}</div>;
};

export default memo(Title);
