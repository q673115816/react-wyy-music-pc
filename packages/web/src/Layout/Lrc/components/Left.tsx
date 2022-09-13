import React, { memo } from "react";
import classNames from "classnames";
import { useAppSelector } from "@/modules/hooks";
import { audioSelector } from "@/modules/reducers/audio/slice";
import style from "./Left.module.scss";

const Left = () => {
  const { currentSong, running } = useAppSelector(audioSelector);

  return (
    <div>
      <div className="relative">
        <div
          className="mt-16 mb-10 relative m-auto w-min duration-500 transition-transform z-10"
          style={running ? { transform: "rotate(40deg)" } : {}}
        >
          <div
            className="point shadow relative transform -translate-y-1/2 rounded-full bg-gray-300 w-5 h-5 border-8 border-white bg-white"
            style={{ zIndex: 2 }}
          />
          <div
            className="handle absolute top-0 left-1/2 shadow bg-white h-2 w-20 origin-top-left"
            style={{ transform: "rotate(45deg) translate(0, -50%)", zIndex: 1 }}
          >
            <div
              className=" absolute left-full bg-white shadow w-12 h-2 origin-top-left"
              style={{ transform: "rotate(-45deg) translate(-10%, 0)" }}
            >
              <div className="shadow w-4 h-4 absolute left-full -top-1 bg-white" />
            </div>
          </div>
        </div>
        <div className="rounded-full bg-gray-300 p-2.5 w-64 h-64">
          <div
            className={classNames(
              style.record,
              "flex-center rounded-full p-9",
              {
                on: running,
              }
            )}
          >
            <img
              className="rounded-full border-8 border-black"
              src={currentSong.al.picUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Left);
