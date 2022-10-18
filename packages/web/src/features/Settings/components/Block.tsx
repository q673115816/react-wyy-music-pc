import React, { FC, memo, PropsWithChildren } from "react";

const Block: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div></div>
      {children}
    </div>
  );
};

export default memo(Block);
