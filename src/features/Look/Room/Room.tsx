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
  const RefVideo = useRef<HTMLVideoElement>(null);
  const RefPC = useRef(
    new RTC({
      iceCandidateCallback(iceCandidate) {
        socket.emit("private", { to: RefPC.current.id, iceCandidate });
      },
      negotiationneededCallback(description) {
        console.log("重发 description");
        socket.emit("private", { to: RefPC.current.id, description });
      },
      trackCallback(event) {
        console.log("get track", event);
        RefVideo.current.srcObject = event.streams[0];
      },
    })
  );

  const successCallback = (data: any) => {
    if (data.from) RefPC.current.id = data.from;
    if (data.description) RefPC.current.got(data.description);
    if (data.iceCandidate) RefPC.current.asd(data.iceCandidate);
  };

  useEffect(() => {
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
        <video ref={RefVideo} className={`w-full`} autoPlay playsInline />
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
