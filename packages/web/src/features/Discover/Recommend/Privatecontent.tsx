import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import MenuCreate from "@/components/MenuCreate/MenuCreate";
import { Privatecontent as PrivatecontentProps } from "@/modules/services/types";
interface iProps {
  privatecontent: PrivatecontentProps[];
}

const Privatecontent: FC<iProps> = ({ privatecontent = [] }) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    {privatecontent.map((item) => (
      <div className="item" key={item.id}>
        <MenuCreate item={item} type="mv" schema={[["播放MV"]]}>
          <div className="cover relative rounded overflow-hidden">
            <Link to={`/player/mv/${item.id}`} className="">
              <span className="ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200">
                <IconPlayerPlay size={14} className="fill-current" />
              </span>
              <img
                loading={"lazy"}
                className="w-full h-full ui_containimg aspect-video"
                src={item.sPicUrl}
                alt=""
              />
            </Link>
          </div>
        </MenuCreate>
        <div className="name text-sm loading-4 mt-2">
          <Link to={`/player/mv/${item.id}`}>{item.name}</Link>
        </div>
      </div>
    ))}
  </div>
);

export default memo(Privatecontent);
