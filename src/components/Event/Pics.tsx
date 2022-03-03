import classNames from "classnames";
import React, { FC, memo } from "react";
import style from "./pics.module.scss";

interface iProps {
  item: [];
}

const lengths = {};

const Pics: FC<iProps> = ({ item }) => {
  if (!item) return null;
  const { length } = item;
  return (
    <div className={classNames(style.pics, "mt-2.5", `pic_${length}`)}>
      {item.map((pic) => (
        <div
          key={pic.originUrl}
          className="img relative rounded-lg overflow-hidden"
        >
          <img
            loading={`lazy`}
            src={pic.originUrl}
            className="w-full object-cover h-full aspect-square"
            alt=""
          />
          {pic.width / pic.height < 0.75 && (
            <div className="absolute bottom-0 right-0 mx-1 my-2 border leading-tight bg-black bg-opacity-20 text-white border-current px-1 rounded-full">
              长图
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(Pics);
