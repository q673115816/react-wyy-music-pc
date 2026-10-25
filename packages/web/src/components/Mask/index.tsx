import React, {
  FC,
  memo,
  MouseEventHandler,
  PropsWithChildren,
  DOMAttributes,
  useRef,
} from "react";
import { useMaskStore } from "@/stores";

const Mask: FC<PropsWithChildren<DOMAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  const ref = useRef(null);
  const handleMaskClick: MouseEventHandler = (e) => {
    if (e.target === ref.current) {
      useMaskStore.getState().setDialogReset();
    }
  };
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex-center z-50"
      onMouseDown={handleMaskClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default memo(Mask);
