import React, {memo, useCallback} from 'react'
import {Link, useHistory, useLocation} from "react-router-dom";
import {iList} from "./types";
import {useAppSelector} from "@/reducers/hooks";
import {liveSelector} from "@/reducers/live/slice";
import {useCreateSocket} from "@/pages/Look/socket";

export default memo<{ list: iList }>(({list}) => {
  const {socket} = useAppSelector(liveSelector)
  const {push} = useHistory()
  const {pathname} = useLocation()
  const handleBeforeEntry = useCallback((e, key) => {
    e.preventDefault()
    if(!socket) useCreateSocket()
    prompt()
    socket.emit('join', {})
    push(`${pathname}/${key}`)
  }, [pathname])
  return (
    <div className={`grid grid-cols-3 gap-5`}>
      {
        list.map(([key, options]) => (
          <div key={key}>
            <a href={`${pathname}/${key}`} onClick={(e) => handleBeforeEntry(e, key)}>
              <img className={`ui_aspect-ratio-16/9 cursor-pointer`} loading={`lazy`} src={options.banner} alt=""/>
            </a>
            <a href={`${pathname}/${key}`}
               onClick={(e) => handleBeforeEntry(e, key)}
               className={`cursor-pointer`}>
              {options.title}
            </a>
            <div><Link to={`/`}>{options.user}</Link></div>
          </div>
        ))
      }
    </div>
  )
})
