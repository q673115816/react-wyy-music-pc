import classNames from "classnames";
import React, { FC, memo } from "react";

interface iProps {
  item: [];
}

const Pics: FC<iProps> = ({ item }) => {
  if (!item) return null;
  let len = item.length;
  if (len === 1) {
    return (
      <div className="pics grid gap-1 mt-2.5 pic_1">
        <div className="img">
          <img
            src={item[0].originUrl}
            className="max-h-full max-w-full object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    );
  }
  if (len === 8) len = "even";
  else len = 3;
  return (
    <div className={classNames("pics grid gap-1 mt-2.5", `pic_${len}`)}>
      {item.map((pic) => (
        <div
          key={pic.originUrl}
          className="img relative rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              loading={`lazy`}
              src={pic.originUrl}
              className="w-full object-cover h-full aspect-square"
              alt=""
            />
          </div>
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
