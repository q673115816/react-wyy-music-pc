import React, { FC, memo, PropsWithChildren } from "react";

const Submit: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      type="submit"
      className={
        "w-full text-center text-white rounded text-base ui_theme_bg_color leading-10"
      }
    >
      {children}
    </button>
  );
};

export default memo(Submit);
