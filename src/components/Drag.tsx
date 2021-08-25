import React, {memo, MouseEventHandler, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';

interface MaskProps {
  onMouseMove: MouseEventHandler,
  onMouseUp: MouseEventHandler,
}

interface iProps extends MaskProps {
  onMouseDown: MouseEventHandler,
  className?: string,
  title?: string,
}

const Mask = memo<MaskProps>(({onMouseMove, onMouseUp}) => (
  createPortal(<div
    className="absolute inset-0 z-50"
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
  />, document.querySelector('#help-root') as HTMLDivElement)
))


export default memo<iProps>((props) => {
  console.log('helpMask');
  const { children, onMouseDown, onMouseMove, onMouseUp, ..._props} = props
  const [dragger, setDragger] = useState(false)
  const defaultMouseDown: MouseEventHandler = useCallback((e) => {
    setDragger(true)
    onMouseDown(e)
  }, [])
  const defaultMouseMove: MouseEventHandler = useCallback((e) => {
    onMouseMove(e)
  }, [])

  const defaultMouseUp: MouseEventHandler = useCallback((e) => {
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
