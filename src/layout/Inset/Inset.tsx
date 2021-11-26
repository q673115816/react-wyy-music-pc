import React, { CSSProperties, FC, memo } from "react";
import { useAppSelector } from "@/reducers/hooks";

const Inset: FC = ({ children }) => {
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

  const style1 = {
    fontFamily: font,
    "--themeColor": theme,
  };

  const style2: CSSProperties = {
    ...(SCREEN === "normal"
      ? {
          "--WIDTH": `${globalWidth}px`,
          "--HEIGHT": `${globalHeight}px`,
        }
      : {
          "--WIDTH": "100vw",
          "--HEIGHT": "100vh",
        }),
    ...(POSITION
      ? globalDragger
        ? {
            transform: `translate(${globalX}px, ${globalY}px)`,
          }
        : {
            position: "absolute",
            left: `${globalX}px`,
            top: `${globalY}px`,
          }
      : {}),
  };
  return (
    <div className="App" style={style1}>
      <div
        id="NeteaseCloudMusic"
        className="domWrapper flex flex-col shadow-lg select-none"
        style={style2}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Inset);
