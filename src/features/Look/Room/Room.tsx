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

  const RefStream = useRef<MediaStream>(new MediaStream());
  const RefVideo = useRef(null);
  const RefPC = useRef(
    new RTC({
      iceCandidateCallback(iceCandidate) {
        socket.emit("private", { detail: { uid: "337845818" }, iceCandidate });
      },
      negotiationneededCallback(description) {
        console.log("重发 description");
        socket.emit("publish", { description });
      },
    })
  );

  const successCallback = (data: any) => {
    if (data.description) RefPC.current.got(data.description);
    if (data.iceCandidate) RefPC.current.asd(data.iceCandidate);
  };

  useEffect(() => {
    // RefVideo.current.srcObject = RefStream.current;
    RefPC.current.pc.ontrack = (e) => {
      console.log("pc get track", e);
      // RefStream.current.addTrack(e.track);
      RefVideo.current.srcObject = e.streams[0];
    };
    socket.on("private", successCallback);
    socket.on("publish", successCallback);
    socket.emit("join", {
      detail: { uid },
      description: RefPC.current.localDescription,
    });
    return () => {
      socket.off("join-success", successCallback);
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
