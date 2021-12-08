import React, { memo, MouseEvent, MouseEventHandler, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { IconChevronDownRight } from "@tabler/icons";
import {
  setGlobalRect,
  setGlobalStartRect,
  setGlobalResizer,
  setGlobalStartRectLock,
} from "@/reducers/inset/slice";
import Drag from "@/components/Drag";

export default memo(function Resizer() {
  const dispatch = useAppDispatch();
  const { SCREEN, GlobalRectLock } = useAppSelector(({ inset }) => inset);

  const onMouseMove: MouseEventHandler = useCallback((e) => {
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
  }, []);

  const onMouseUp: MouseEventHandler = () => {
    // dispatch(setGlobalResizer(false));
  };

  const onMouseDown: MouseEventHandler = useCallback((e) => {
    // dispatch(setGlobalResizer(true));
    dispatch(
      setGlobalStartRect({
        x: e.clientX,
        y: e.clientY,
      })
    );
  }, []);

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
