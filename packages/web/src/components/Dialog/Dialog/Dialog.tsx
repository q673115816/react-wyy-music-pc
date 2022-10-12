import React, {
  FC,
  memo,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import { IconX } from "@tabler/icons";
import classNames from "classnames";
import { useAppDispatch } from "@/modules/hooks";
import { concatAll, fromEvent, map, takeUntil } from "rxjs";
import { useGetSetState } from "react-use";

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
  const dispatch = useAppDispatch();
  const inset = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const handle = useRef<HTMLDivElement>(null);
  const [insetState, setInsetState] = useState({
    width: 0,
    height: 0,
  });
  const [contentState, setContentState] = useState({
    width: 0,
    height: 0,
  });
  const [state, setState] = useGetSetState({
    top: 0,
    left: 0,
  });

  const handleClick: MouseEventHandler = (e) => {
    if (e.target === inset.current) dispatch(setDialogReset());
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

  useEffect(() => {
    const ele = handle.current as HTMLDivElement;
    const mousedown$ = fromEvent<MouseEvent>(ele, "mousedown");
    const mousemove$ = fromEvent<MouseEvent>(document, "mousemove");
    const mouseup$ = fromEvent<MouseEvent>(document, "mouseup");
    const subscription = mousedown$
      .pipe(
        map(({ clientX, clientY }) => {
          return {
            top: state().top,
            left: state().left,
            startX: clientX,
            startY: clientY,
          };
        }),
        map(({ startX, startY, top, left }) =>
          mousemove$.pipe(
            takeUntil(mouseup$),
            map(({ clientX, clientY }) => {
              return {
                top: Math.min(
                  insetState.height - contentState.height,
                  Math.max(0, top + clientY - startY)
                ),
                left: Math.min(
                  insetState.width - contentState.width,
                  Math.max(0, left + clientX - startX)
                ),
              };
            })
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          setState(data);
        },
      });
    return () => subscription.unsubscribe();
  }, []);

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
          onClick={() => dispatch(setDialogReset())}
        >
          <IconX stroke={1.5} />
        </button>
        <div
          ref={handle}
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
