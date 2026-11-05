import classNames from "classnames";
import React, { useState, memo } from "react";
import { useDrag } from "@use-gesture/react";

import Control from "./Control";
import { useSettingsStore, useInsetStore } from "@/stores";
import Content from "./Content";

const Lrc = () => {
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useInsetStore();
  const { globalLrcVisibility } = useSettingsStore();
  const [dragger, setDragger] = useState(false);
  const [active, setActive] = useState(false);

  const bind = useDrag(({ first, last, xy: [x, y] }) => {
    if (first) {
      setDragger(true);
      useInsetStore.getState().setGlobalLrcStartInset({ x, y });
    }
    if (!last) useInsetStore.getState().setGlobalLrcInset({ x, y });
    if (last) {
      setDragger(false);
      setActive(true);
    }
  });

  if (!globalLrcVisibility) return null;
  return (
    <div
      className={classNames("flex-center z-40 text-xl fixed")}
      style={{
        width,
        height,
        top: y,
        left: x,
      }}
    >
      <div onMouseEnter={() => setActive(true)}>
        <Content />
      </div>
      {(active || dragger) && (
        <div
          onMouseLeave={() => setActive(false)}
          className={`absolute w-full h-full bg-black/20 border border-gray-400 shadow pointer-events-${
            active || dragger ? "auto" : "none"
          }`}
        >
          <div {...bind()} className="w-full h-full">
            <Control />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Lrc);
