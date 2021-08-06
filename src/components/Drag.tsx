import React, {FC, memo, PropsWithChildren, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';

interface iProps {
  onMouseDown: (e: MouseEvent) => void,
  onMouseMove: (e: MouseEvent) => void,
  onMouseUp: (e: MouseEvent) => void,
  className?: string,
  title?: string,
  children?: any
}

export default memo<PropsWithChildren<iProps>>((props) => {
  console.log('helpMask');
  const { children, onMouseDown, onMouseMove, onMouseUp, ..._props} = props
  const [dragger, setDragger] = useState(false)
  const defaultMouseDown = useCallback((e) => {
    setDragger(true)
    onMouseDown(e)
  }, [])
  const defaultMouseMove = useCallback((e) => {
    onMouseMove(e)
  }, [onMouseMove])

  const defaultMouseUp = useCallback((e) => {
    onMouseUp(e)
    setDragger(false)
  }, [onMouseUp])

  return (
    <>
      <div onMouseDown={defaultMouseDown} {..._props}>{children}</div>
      {dragger && createPortal(<div
        className="absolute inset-0 z-50"
        onMouseMove={defaultMouseMove}
        onMouseUp={defaultMouseUp}
      />, document.querySelector('#help-root') as HTMLDivElement)
      }
    </>
  )
});
