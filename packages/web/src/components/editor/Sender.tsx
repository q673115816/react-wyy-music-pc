import React, { FC, memo, PropsWithChildren } from "react";

const Sender: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button type="button" className="text-gray-500 hover:text-black">
      {children}
    </button>
  );
};
export default memo(Sender);
