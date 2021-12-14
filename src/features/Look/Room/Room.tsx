import React, { memo, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default memo(function Room() {
  const { id } = useParams();
  const RefDeskTop = useRef(null);
  const handleInit = async () => {
    if (!RefDeskTop.current) return;
    const deskTop = RefDeskTop.current as HTMLVideoElement;
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    console.log(mediaStream.getTracks());
    mediaStream
      .getTracks()
      .forEach((track) =>
        track.addEventListener("ended", () => console.log("停止共享回调"))
      );
    deskTop.srcObject = mediaStream;
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className={`p-8 flex`}>
      <div className="relative flex-1">
        <video
          ref={RefDeskTop}
          className={`w-full bg-black ui_aspect-ratio-16/9`}
          autoPlay
          playsInline
        />
        <video
          className={`absolute bottom-0 right-0 w-36 border m-4 ui_aspect-ratio-16/9`}
          autoPlay
          playsInline
          muted
        />
      </div>
      <div className="w-1/4 flex flex-col ml-2 border">
        <div className={`flex-1 overflow-auto`} />
        <hr />
        <div className="">
          <textarea
            className={`resize-none p-1 h-16 w-full block`}
            placeholder={"say something"}
          />
        </div>
      </div>
    </div>
  );
});
