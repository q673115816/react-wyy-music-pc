import React, { FC, memo, PropsWithChildren, useLayoutEffect, useRef } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { useDrag } from "@use-gesture/react";
import { useGetSetState } from "react-use";
import { useMaskStore } from "@/stores";

interface iProps extends PropsWithChildren {
  title: string;
  className?: string;
  width?: number;
}

const Dialog: FC<iProps> = ({ children, title, className = "", width = 470 }) => {
  const content = useRef<HTMLDivElement>(null);
  const [insetState, setInsetState] = useGetSetState({
    width: 0,
    height: 0,
  });
  const [contentState, setContentState] = useGetSetState({
    width: 0,
    height: 0,
  });
  const [state, setState] = useGetSetState({
    top: 0,
    left: 0,
  });

  useLayoutEffect(() => {
    const inset = document.getElementById("inset");
    const contentDom = content.current;
    if (!inset || !contentDom) return;
    setContentState({
      width: contentDom.clientWidth,
      height: contentDom.clientHeight,
    });
    setInsetState({
      width: inset.clientWidth,
      height: inset.clientHeight,
    });
    setState({
      top: inset.clientHeight / 2 - contentDom.clientHeight / 2,
      left: inset.clientWidth / 2 - contentDom.clientWidth / 2,
    });
  }, []);

  const bind = useDrag(({ first, movement: [mx, my], memo }) => {
    const start = memo ?? { top: state().top, left: state().left };
    if (!first) {
      setState({
        top: Math.min(insetState().height - contentState().height, Math.max(0, start.top + my)),
        left: Math.min(insetState().width - contentState().width, Math.max(0, start.left + mx)),
      });
    }
    return start;
  });

  const portalContainer = typeof document === "undefined" ? undefined : (document.getElementById("inset") ?? undefined);

  return (
    <DialogPrimitive.Root
      open
      onOpenChange={(open) => {
        if (!open) useMaskStore.getState().setDialogReset();
      }}
    >
      <DialogPrimitive.Portal container={portalContainer}>
        <DialogPrimitive.Overlay className="absolute inset-0 z-50" />
        <DialogPrimitive.Content
          ref={content}
          aria-describedby={undefined}
          className={classNames("bg-white shadow rounded absolute z-50", className)}
          style={{
            width,
            ...state(),
          }}
          onPointerDownOutside={(event) => {
            const originalEvent = event.detail.originalEvent;
            const isRightClick = originalEvent.button === 2 || (originalEvent.button === 0 && originalEvent.ctrlKey);
            if (isRightClick) return;
            // 保持原来的遮罩边界：只在 #inset 内点击时关闭，避免点到窗口外也关闭
            if (portalContainer && !(originalEvent.target instanceof Node && portalContainer.contains(originalEvent.target))) {
              event.preventDefault();
              return;
            }
            event.preventDefault();
            useMaskStore.getState().setDialogReset();
          }}
        >
          <DialogPrimitive.Close asChild>
            <button type="button" className="absolute top-2.5 right-2.5 text-2xl z-10 text-gray-500">
              <IconX stroke={1.5} />
            </button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Title {...bind()} className="flex-center font-bold text-base cursor-move h-20 m-0">
            {title}
          </DialogPrimitive.Title>
          <div>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default memo(Dialog);
