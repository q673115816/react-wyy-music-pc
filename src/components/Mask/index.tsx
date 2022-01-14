import React, { FC, memo, MouseEventHandler, useRef } from "react";
import { useDispatch } from "react-redux";
import { setDialogReset } from "@/reducers/mask/slice";

const Mask: FC<{}> = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  // console.log(ref);
  const handleMaskClick: MouseEventHandler<HTMLDivElement> = (e) => {
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
