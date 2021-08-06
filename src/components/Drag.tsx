import React, {FC, memo, PropsWithChildren, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';

interface MaskProps {
  onMouseMove: (e: MouseEvent) => void,
  onMouseUp: (e: MouseEvent) => void,
}

interface iProps extends MaskProps {
  onMouseDown: (e: MouseEvent) => void,
  className?: string,
  title?: string,
  children?: any
}

const Mask = memo<PropsWithChildren<MaskProps>>(({onMouseMove, onMouseUp}) => (
  createPortal(<div
    className="absolute inset-0 z-50"
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
  />, document.querySelector('#help-root') as HTMLDivElement)
))


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
  }, [])

  const defaultMouseUp = useCallback((e) => {
    onMouseUp(e)
    setDragger(false)
  }, [])

  return (
    <>
      <div onMouseDown={defaultMouseDown} {..._props}>
        {children}
      </div>
      {dragger && <Mask
      onMouseMove={defaultMouseMove}
      onMouseUp={defaultMouseUp}/>
      }
    </>
  )
});
