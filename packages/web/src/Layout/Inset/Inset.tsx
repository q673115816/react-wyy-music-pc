import React, { FC, memo, useMemo } from "react";
import { useAppSelector } from "@/modules/hooks";
import "./style.scss";

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
  } = useAppSelector(({ inset }) => inset);
  const { theme, font } = useAppSelector(({ setting }) => setting);

  const themeStyle = {
    fontFamily: font,
    "--themeColor": theme,
  };

  const sizeStyle = useMemo(() => {
    if (SCREEN === "normal")
      return {
        "--WIDTH": `${globalWidth}px`,
        "--HEIGHT": `${globalHeight}px`,
      };
    return {
      "--WIDTH": "100vw",
      "--HEIGHT": "100vh",
    };
  }, [SCREEN, globalWidth, globalHeight]);

  const positionStyle = useMemo(() => {
    if (!POSITION) return null;
    if (globalDragger) {
      return {
        transform: `translate(${globalX}px, ${globalY}px)`,
      };
    }
    return {
      position: "absolute",
      left: `${globalX}px`,
      top: `${globalY}px`,
    };
  }, [POSITION, globalDragger, globalX, globalY]);

  return (
    <div className="App" style={themeStyle}>
      <div
        id={`inset`}
        className="Wrap flex flex-col shadow-lg select-none"
        style={{
          ...sizeStyle,
          ...positionStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Inset);
