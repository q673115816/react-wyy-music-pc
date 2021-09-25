import React, {
  CSSProperties,
  memo,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface MaskProps {
  onMouseMove: MouseEventHandler;
  onMouseUp: MouseEventHandler;
}

interface iProps extends MaskProps {
  onMouseDown: MouseEventHandler;
  className?: string;
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Mask = memo<MaskProps>(({ onMouseMove, onMouseUp }) =>
  createPortal(
    <div
      className="absolute inset-0 z-50"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    />,
    document.querySelector("#help-root") as HTMLDivElement
  )
);

export default memo<iProps>(
  ({ children, onMouseDown, onMouseMove, onMouseUp, ...props }) => {
    // console.log("helpMask");
    const [dragger, setDragger] = useState(false);
    const defaultMouseDown: MouseEventHandler = useCallback((e) => {
      setDragger(true);
      onMouseDown(e);
    }, []);
    const _onMouseMove: MouseEventHandler = useCallback(onMouseMove, []);

    const _onMouseUp: MouseEventHandler = useCallback((e) => {
      onMouseUp(e);
      setDragger(false);
    }, []);

    return (
      <>
        <div onMouseDown={defaultMouseDown} {...props}>
          {children}
        </div>
        {dragger && <Mask onMouseMove={_onMouseMove} onMouseUp={_onMouseUp} />}
      </>
    );
  }
);
