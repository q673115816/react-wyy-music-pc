import React, { memo, useMemo } from "react";
import { useAppSelector } from "@/reducers/hooks";

export default memo(({ children }) => {
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
  return (
    <div
      className="App"
      style={{
        fontFamily: font,
        "--themeColor": theme,
      }}
    >
      <div
        id="NeteaseCloudMusic"
        className="domWrapper flex flex-col shadow-lg select-none"
        style={{
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
        }}
      >
        {children}
      </div>
    </div>
  );
});
