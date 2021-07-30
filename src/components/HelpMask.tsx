import React, {FC, memo, useCallback} from 'react';
import {createPortal} from 'react-dom';
import {useAppDispatch, useAppSelector} from "@/reducers/hooks";

interface iProps {
  onMouseMove: (event: MouseEvent) => void,
  onMouseUp: (event: MouseEvent) => void
}

const Mask: FC<iProps> = ({ children, onMouseMove, onMouseUp,}) => {
  const { dragger } = useAppSelector(({drag}) => drag);
  console.log('helpMask');
  return (
    <>
      {children}
      {dragger && createPortal(<div
        className="absolute inset-0 z-50"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      />, document.querySelector('#help-root'))
      }
    </>
  )
}

export default memo(Mask);
