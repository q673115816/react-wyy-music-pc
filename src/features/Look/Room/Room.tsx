import React, { memo, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LookContent } from "../Look";
import RTC from "../RTC";

export default memo(function Room() {
  const { uid } = useParams();
  const {
    lookReducer: { socket },
    lookDispatch,
  } = useContext(LookContent);

  const RefStream = useRef(new MediaStream());
  const RefVideo = useRef(null);
  const RefPC = useRef(new RTC());

  const handleInit = async () => {
    if (!RefVideo.current) return;
    await RefPC.current.start();
    socket.emit("join", { uid });
  };

  useEffect(() => {
    const handleJoinSuccess = (data: any) => {
      RefPC.current.got(data.description);
    };
    socket.on("join-success", handleJoinSuccess);
    socket.emit("join", { uid });
    return () => {
      socket.off("join-success", handleJoinSuccess);
    };
  }, []);
  return (
    <div className={`p-8 flex`}>
      <div className="relative flex-1">
        <video
          ref={RefVideo}
          className={`w-full bg-black ui_aspect-ratio-16/9`}
          autoPlay
          playsInline
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
