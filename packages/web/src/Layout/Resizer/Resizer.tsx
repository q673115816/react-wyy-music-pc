import React, { memo, MouseEvent, MouseEventHandler, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { IconChevronDownRight } from "@tabler/icons";
import {
  setGlobalRect,
  setGlobalStartRect,
  setGlobalResizer,
  setGlobalStartRectLock,
} from "@/modules/reducers/inset/slice";
import Drag from "@/components/Drag";
import classNames from "classnames";
import style from "./Resizer.module.scss";

export default memo(function Resizer() {
  const dispatch = useAppDispatch();
  const { GlobalRectLock } = useAppSelector(({ inset }) => inset);

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
  return (
    <Drag
      className={classNames(
        style.resizer,
        "absolute right-0 bottom-0 text-gray-500"
      )}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <IconChevronDownRight />
    </Drag>
  );
});
