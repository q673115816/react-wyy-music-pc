import React, { memo, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { IconChevronDownRight } from "@tabler/icons";
import {
  setGlobalRect,
  setGlobalStartRect,
  setGlobalResizer,
  setGlobalStartRectLock,
} from "@/reducers/inset/slice";
import Drag from "@/components/Drag";

export default memo(() => {
  const dispatch = useAppDispatch();
  const { SCREEN, GlobalRectLock } = useAppSelector(({ inset }) => inset);

  const onMouseMove = (e) => {
    e.preventDefault();
    if (GlobalRectLock) return;
    dispatch(setGlobalStartRectLock());
    requestAnimationFrame(() => {
      // console.log('raf');
      dispatch(
        setGlobalRect({
          x: e.clientX,
          y: e.clientY,
        })
      );
    });
  };

  const onMouseUp = () => {
    // dispatch(setGlobalResizer(false));
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    // dispatch(setGlobalResizer(true));
    dispatch(
      setGlobalStartRect({
        x: e.clientX,
        y: e.clientY,
      })
    );
  };

  if (SCREEN !== "normal") return null;
  return (
    <Drag
      className="absolute right-0 bottom-0 text-gray-500"
      style={{ cursor: "se-resize" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <IconChevronDownRight />
    </Drag>
  );
});
