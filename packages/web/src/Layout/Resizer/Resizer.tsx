import React, { memo, useEffect, useRef } from "react";
import { useAppDispatch } from "@/modules/hooks";
import { IconChevronDownRight } from "@tabler/icons";
import {
  setGlobalRect,
  setGlobalStartRect,
} from "@/modules/reducers/inset/slice";
import classNames from "classnames";
import style from "./Resizer.module.scss";
import useDraggable from "@/hooks/useDraggable";

const Resizer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { startX, startY, moveX, moveY } = useDraggable(ref.current);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setGlobalStartRect({
        x: startX,
        y: startY,
      })
    );
  }, [startX, startY]);
  useEffect(() => {
    dispatch(
      setGlobalRect({
        x: moveX,
        y: moveY,
      })
    );
  }, [moveX, moveY]);
  return (
    <div
      className={classNames(
        style.resizer,
        "absolute cursor-nw-resize right-0 bottom-0 text-gray-500"
      )}
      ref={ref}
    >
      <IconChevronDownRight />
    </div>
  );
};

export default memo(Resizer);
