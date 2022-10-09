import React, {
  FC,
  memo,
  MouseEventHandler,
  PropsWithChildren,
  DOMAttributes,
  useRef,
} from "react";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import { useAppDispatch } from "@/modules/hooks";

const Mask: FC<PropsWithChildren<DOMAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const handleMaskClick: MouseEventHandler = (e) => {
    if (e.target === ref.current) {
      dispatch(setDialogReset());
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
