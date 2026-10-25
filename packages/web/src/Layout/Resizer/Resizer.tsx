import React, { memo, useEffect, useRef } from "react";
import { IconChevronDownRight } from "@tabler/icons-react";

import classNames from "classnames";
import style from "./Resizer.module.scss";
import useDraggable from "@/hooks/useDraggable";
import { useInsetStore } from "@/stores";

const Resizer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { startX, startY, moveX, moveY } = useDraggable(ref.current);

  useEffect(() => {
    useInsetStore.getState().setGlobalStartRect({
        x: startX,
        y: startY,
      })
    ;
  }, [startX, startY]);
  useEffect(() => {
    useInsetStore.getState().setGlobalRect({
        x: moveX,
        y: moveY,
      })
    ;
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
