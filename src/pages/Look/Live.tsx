import React, {memo, useRef} from 'react'
import {useAppDispatch, useAppSelector} from "@/reducers/hooks";
import {deskTopClose, deskTopOpen, liveSelector, userClose, userOpen} from "@/reducers/live/slice";
import classnames from 'classnames'
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
  const handleDeskTop = () => {
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
    dispatch(deskTopClose())
    const tracks = RefDeskTop.current.srcObject.getTracks()
    tracks.forEach((track: MediaStreamTrack) => track.stop())
    RefDeskTop.current.srcObject = null
  }

  const handleUser = () => {
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
      RefUser.current.srcObject = mediaStream;
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

  return (
    <div className={`w-full h-full p-8 overflow-auto`}>
      <div className={`flex`}>
        <button type={'button'} className={classnames(`text-white rounded p-2`, status.deskTop ? 'bg-red-500' : 'bg-blue-500')} onClick={handleDeskTop}>桌面共享开关</button>
        <button type={'button'} className={classnames(`text-white rounded p-2`, status.user ? 'bg-red-500' : 'bg-blue-500')} onClick={handleUser}>摄像头开关</button>
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
