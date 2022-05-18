import React, { FC, memo, useMemo } from "react";
import { useAppSelector } from "@/modules/hooks";
import "./style.scss";
import { insetSelector } from "@/modules/reducers/inset/slice";
import { useCss } from "react-use";
import classNames from "classnames";
import { settingSelector } from "@/modules/reducers/settings/slice";

interface iInset {}

const Inset: FC<iInset> = ({ children }) => {
  const {
    POSITION,
    SCREEN,
    globalX,
    globalY,
    globalDragger,
    globalWidth,
    globalHeight,
  } = useAppSelector(insetSelector);
  const { theme, font } = useAppSelector(settingSelector);

  const themeStyle = useCss({
    fontFamily: font,
    "--theme-color": theme,
  });

  const sizeStyle = useCss({
    "--WIDTH": `${globalWidth}px`,
    "--HEIGHT": `${globalHeight}px`,
  });

  const transStyle = useCss({
    transform: `translate(${globalX}px, ${globalY}px)`,
  });

  const insetStyle = useCss({
    position: "absolute",
    left: `${globalX}px`,
    top: `${globalY}px`,
  });

  return (
    <div className={classNames("App", themeStyle)}>
      <div
        id={`inset`}
        className={classNames(
          "Wrap flex flex-col shadow-lg select-none",
          sizeStyle,
          globalDragger ? transStyle : insetStyle
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Inset);
