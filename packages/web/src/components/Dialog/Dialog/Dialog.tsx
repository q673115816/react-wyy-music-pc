import React, {
  FC,
  memo,
  MouseEventHandler,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
} from "react";

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

const Dialog: FC<iProps> = ({
  children,
  title,
  className = "",
  width = 470,
}) => {
  const inset = useRef<HTMLDivElement>(null);
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

  const handleClick: MouseEventHandler = (e) => {
    if (e.target === inset.current) useMaskStore.getState().setDialogReset();
  };

  useLayoutEffect(() => {
    setContentState({
      width: content.current!.clientWidth,
      height: content.current!.clientHeight,
    });
    setInsetState({
      width: inset.current!.clientWidth,
      height: inset.current!.clientHeight,
    });
    setState({
      top: inset.current!.clientHeight / 2 - content.current!.clientHeight / 2,
      left: inset.current!.clientWidth / 2 - content.current!.clientWidth / 2,
    });
  }, []);

  const bind = useDrag(({ first, movement: [mx, my], memo }) => {
    const start = memo ?? { top: state().top, left: state().left };
    if (!first) {
      setState({
        top: Math.min(
          insetState().height - contentState().height,
          Math.max(0, start.top + my)
        ),
        left: Math.min(
          insetState().width - contentState().width,
          Math.max(0, start.left + mx)
        ),
      });
    }
    return start;
  });

  return (
    <div
      ref={inset}
      onClick={handleClick}
      className={`absolute inset-0 flex-center z-50`}
    >
      <div
        ref={content}
        className={classNames("bg-white shadow rounded absolute", className)}
        style={{
          width,
          ...state(),
        }}
      >
        <button
          type="button"
          className="absolute top-2.5 right-2.5 text-2xl z-10 text-gray-500"
          onClick={() => useMaskStore.getState().setDialogReset()}
        >
          <IconX stroke={1.5} />
        </button>
        <div
          {...bind()}
          className="flex-center font-bold text-base cursor-move h-20"
        >
          {title}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default memo(Dialog);
