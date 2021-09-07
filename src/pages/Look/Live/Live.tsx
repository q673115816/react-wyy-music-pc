import React, {memo, MouseEventHandler, ReactNode, useRef} from 'react'
import {useAppDispatch, useAppSelector} from "@/reducers/hooks";
import {
  liveSelector,
  deskTopClose, deskTopOpen,
  userClose, userOpen,
  pushOpen, pushClose,
} from "@/reducers/live/slice";
import classnames from 'classnames'
import socket from './socket'
import useLoginStatus, {handleLoginStatus} from "@/hooks/useLoginStatus";

interface iButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  status: boolean,
  children: ReactNode
}

const Button = memo<iButtonProps>
(({onClick, status, children}) => (
  <button type={'button'}
          className={classnames(`text-white rounded p-2`, status ? 'bg-red-500' : 'bg-blue-500')}
          onClick={onClick}>{children}</button>
))

/*
* TODO
*  1.信令系统
*  2.摄像头叠加桌面，如基本直播
* */
export default memo(() => {
  const dispatch = useAppDispatch()
  const {status} = useAppSelector(liveSelector)

  const RefDeskTop = useRef(null)
  const RefDeskTopStream = useRef(null)
  const RefUser = useRef(null)
  const handleDeskTop: MouseEventHandler = () => {
    if(!status.deskTop) handleDeskTopOpen()
    else handleDeskTopClose()
  }

  const handleDeskTopOpen = () => {

    let deskTopStream = null;
    const mediaStreamConstraints = {
      video: true,
      audio: true,
    };

    function gotDeskTopMediaStream(mediaStream: MediaStream) {
      RefDeskTop.current.srcObject = mediaStream;
      // deskTopStream = mediaStream;
      dispatch(deskTopOpen())
    }

    RefDeskTopStream.current = navigator.mediaDevices
      .getDisplayMedia(mediaStreamConstraints)
      .then(gotDeskTopMediaStream)
      .catch((err) => console.log(err));
  }

  const handleDeskTopClose = () => {
    if(RefDeskTop.current) {
      const tracks = RefDeskTop.current.srcObject.getTracks()
      tracks.forEach((track: MediaStreamTrack) => track.stop())
      RefDeskTop.current.srcObject = null
      dispatch(deskTopClose())
    }
  }

  const handleUser: MouseEventHandler = () => {
    if(!status.user) handleUserOpen()
    else handleUserClose()
  }

  const handleUserOpen = () => {
    dispatch(userOpen())
    let userStream = null;
    const mediaStreamConstraints = {
      video: true,
      audio: true,
    };

    function gotLocalMediaStream(mediaStream: MediaStream) {
      if(RefUser.current) (RefUser.current as HTMLVideoElement).srcObject = mediaStream;

      // userStream = mediaStream;
    }

    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then(gotLocalMediaStream)
      .catch((err) => console.log(err));
  }

  const handleUserClose = () => {
    dispatch(userClose())
  }

  const handleSend: MouseEventHandler = () => {
    if(!status.push) handlePushOpen()
    else handlePushClose()
  }

  const handlePushOpen = async () => {
    dispatch(pushOpen())
    socket.connect()
    socket.emit('create', {
      uid: 110
    })
  }
  const handlePushClose = () => {
    dispatch(pushClose())
    socket.disconnect()
  }

  return (
    <div className={`w-full h-full p-8 overflow-auto`}>
      <div className={`flex`}>
        <Button onClick={handleDeskTop} status={status.deskTop}>桌面共享开关</Button>
        <Button onClick={handleUser} status={status.user}>摄像头开关</Button>
        <Button onClick={handleSend} status={status.push}>推送开关</Button>
      </div>
      <div className={`flex flex-col`}>
        <div className={``}>
          <video className={`w-full`} ref={RefDeskTop} autoPlay playsInline/>
        </div>
        <div className={''}>
          <video className={`w-full`} ref={RefUser} autoPlay playsInline/>
        </div>
      </div>
    </div>
  )
})
