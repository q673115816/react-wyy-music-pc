import React, { memo } from "react";
import { IconChevronDownRight } from "@tabler/icons-react";
import { useDrag } from "@use-gesture/react";

import classNames from "classnames";
import style from "./Resizer.module.scss";
import { useInsetStore } from "@/stores";

const Resizer = () => {
  const bind = useDrag(({ first, xy: [x, y] }) => {
    if (first) useInsetStore.getState().setGlobalStartRect({ x, y });
    useInsetStore.getState().setGlobalRect({ x, y });
  });

  return (
    <div
      {...bind()}
      className={classNames(
        style.resizer,
        "absolute cursor-nw-resize right-0 bottom-0 text-gray-500"
      )}
    >
      <IconChevronDownRight />
    </div>
  );
};

export default memo(Resizer);
