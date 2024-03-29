import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { DJProgram as DJProgramProps } from "@/modules/services/types";

interface iProps {
  djprogram: DJProgramProps[];
}

const DJProgram: FC<iProps> = ({ djprogram = [] }) => (
  <div className="grid grid-cols-5 gap-5 mt-4">
    {djprogram.slice(0, 5).map((item) => (
      <div className="" key={item.id}>
        <Link
          to={`/playlist/dj/${item.program?.radio?.id}`}
          className="block border relative rounded overflow-hidden"
        >
          <img
            loading={"lazy"}
            className="w-full aspect-square"
            src={`${item.program.radio.picUrl}?param=200y200`}
            alt=""
          />
          <div className="mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom" />
          <div className="absolute left-0 right-0 bottom-0 p-2">
            <div className="text-white truncate">{item.program.radio.name}</div>
          </div>
        </Link>
        <div className="name leading-5 text-sm mt-2">
          <Link
            to={`/playlist/dj/${item.program.radio.id}`}
            className="text-gray-600 hover:text-black"
          >
            {item.program.radio.rcmdText}
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default memo(DJProgram);
