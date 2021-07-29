import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setDialogReset } from '@/reducers/mask/slice';

export default ({ children, ...props }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  // console.log(ref);
  const handleMaskClick = (e) => {
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
