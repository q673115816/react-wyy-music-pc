import classNames from "classnames";
import React, { useState, memo, MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  setGlobalLrcInset,
  setGlobalLrcStartInset,
} from "@/modules/reducers/inset/slice";
import Drag from "@/components/Drag";
import Control from "./Control";
import { settingSelector } from "@/modules/reducers/settings/slice";
import Content from "./Content";

const Lrc = () => {
  const dispatch = useAppDispatch();
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useAppSelector(({ inset }) => inset);
  const { globalLrcVisibility } = useAppSelector(settingSelector);
  const [dragger, setDragger] = useState(false);
  const [active, setActive] = useState(false);

  const onMouseMove: MouseEventHandler = (e) => {
    e.preventDefault();
    return dispatch(
      setGlobalLrcInset({
        x: e.clientX,
        y: e.clientY,
      })
    );
  };

  const onMouseUp: MouseEventHandler = () => {
    setDragger(false);
    setActive(true);
  };

  const onMouseDown: MouseEventHandler = (e) => {
    setDragger(true);
    dispatch(
      setGlobalLrcStartInset({
        x: e.clientX,
        y: e.clientY,
      })
    );
  };

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
          className={`absolute w-full h-full bg-black bg-opacity-20 border border-gray-400 shadow pointer-events-${
            active || dragger ? "auto" : "none"
          }`}
        >
          <Drag
            className="w-full h-full"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <Control />
          </Drag>
        </div>
      )}
    </div>
  );
};

export default memo(Lrc);
