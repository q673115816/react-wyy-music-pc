import React, { FC, memo, ReactNode } from "react";

type iProps = {
  t: string;
};

const Block: FC<iProps> = ({ t, children }) => {
  return (
    <div>
      <div></div>
      {{ children }}
    </div>
  );
};

export default memo(Block);
