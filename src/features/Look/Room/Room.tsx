import React, { memo, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LookContent } from "../Look";

export default memo(function Room() {
  const { id } = useParams();
  const {
    lookReducer: { status, socket },
    lookDispatch,
  } = useContext(LookContent);
  const RefDeskTop = useRef(null);
  const handleInit = async () => {
    if (!RefDeskTop.current) return;

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
