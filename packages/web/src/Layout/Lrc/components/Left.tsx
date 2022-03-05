import React, { memo } from "react";
import { IconFolderPlus, IconCloudDownload, IconShare } from "@tabler/icons";
import Heart from "@/components/Table/Heart";
import classNames from "classnames";
import { useAppSelector } from "@/modules/hooks";

const Left = () => {
  const { currentSong, running } = useAppSelector(({ audio }) => audio);

  return (
    <div>
      <div className="relative">
        <div
          id="stylus"
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
        <div className=" rounded-full bg-gray-300 p-2.5 w-64 h-64">
          <div
            className={classNames("flex-center rounded-full p-9", {
              on: running,
            })}
            id="record"
          >
            <img
              className="rounded-full border-8 border-black"
              src={currentSong.al.picUrl}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <Heart
          stroke={2}
          id={currentSong.id}
          size={24}
          className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"
        />
        <button
          type="button"
          className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <IconFolderPlus size={24} stroke={1} />
        </button>
        <button
          type="button"
          className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <IconCloudDownload size={24} stroke={1} />
        </button>
        <button
          type="button"
          className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <IconShare size={24} stroke={1} />
        </button>
      </div>
    </div>
  );
};

export default memo(Left);
