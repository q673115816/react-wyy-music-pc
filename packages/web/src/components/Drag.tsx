import React, {
  CSSProperties,
  FC,
  memo,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface MaskProps {
  onMouseMove?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
}

interface iProps extends MaskProps {
  onMouseDown?: MouseEventHandler;
  className?: string;
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Drag: FC<iProps> = ({
  children,
  onMouseDown = () => null,
  onMouseMove = () => null,
  onMouseUp = () => null,
  ...props
}) => {
  // console.log("helpMask");
  const [isDrag, setIsDrag] = useState(false);
  const defaultMouseDown: MouseEventHandler = useCallback((e) => {
    setIsDrag(true);
    onMouseDown(e);
  }, []);

  const _onMouseUp: MouseEventHandler = useCallback((e) => {
    onMouseUp(e);
    setIsDrag(false);
  }, []);

  return (
    <>
      <div onMouseDown={defaultMouseDown} {...props}>
        {children}
      </div>
      {isDrag &&
        createPortal(
          <div
            className="absolute inset-0 z-50"
            onMouseMove={onMouseMove}
            onMouseUp={_onMouseUp}
          />,
          document.querySelector("#help-root") as HTMLDivElement
        )}
    </>
  );
};

export default memo(Drag);
