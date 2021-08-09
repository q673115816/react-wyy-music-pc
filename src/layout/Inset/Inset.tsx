import React, {memo} from 'react'
import {useAppSelector} from "@/reducers/hooks";

export default memo(({children}) => {
  const {
    POSITION,
    SCREEN,
    globalX,
    globalY,
    globalDragger,
    globalWidth,
    globalHeight,
  } = useAppSelector(({ inset }) => inset);
  return (
    <div
      id="NeteaseCloudMusic"
      className="domWrapper flex flex-col shadow-lg select-none"
      style={({
        ...(SCREEN === 'normal' ? {
          '--WIDTH': `${globalWidth}px`,
          '--HEIGHT': `${globalHeight}px`,
        } : {
          '--WIDTH': '100vw',
          '--HEIGHT': '100vh',
        }),
        ...(POSITION ? globalDragger ? {
          transform: `translate(${globalX}px, ${globalY}px)`,
        } : {
          position: 'absolute',
          left: `${globalX}px`,
          top: `${globalY}px`,
        } : {}),
      })}
    >
      {children}
    </div>
  )
})
