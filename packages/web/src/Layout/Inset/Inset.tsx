import React, { FC, memo, PropsWithChildren } from "react";
import "./style.scss";
import { useCss } from "react-use";
import classNames from "classnames";

import { useSettingsStore, useInsetStore } from "@/stores";

type iInset = PropsWithChildren;

const Inset: FC<iInset> = ({ children }) => {
  const { globalX, globalY, globalDragger, globalWidth, globalHeight } =
    useInsetStore();
  const { theme, font } = useSettingsStore();

  const themeStyle = useCss({
    fontFamily: font,
    "--theme-color": theme,
  });

  return (
    <div className={classNames("App", themeStyle)}>
      <div
        id={`inset`}
        className={classNames("Wrap flex flex-col shadow-lg select-none")}
        style={{
          "--WIDTH": `${globalWidth}px`,
          "--HEIGHT": `${globalHeight}px`,
          ...(globalDragger
            ? { transform: `translate(${globalX}px, ${globalY}px)` }
            : {
                position: "absolute",
                left: `${globalX}px`,
                top: `${globalY}px`,
              }),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Inset);
