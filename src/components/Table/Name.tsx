import React, { FC, memo } from "react";
import Tags from "@/components/Tags";
import classNames from "classnames";

interface iProps {
  item: {
    name: string;
    alia?: string[];
    tns?: string[];
  };
  className?: string;
}

const Name: FC<iProps> = ({ item, className = "" }) => (
  <div className={classNames("flex items-center", className)}>
    <div className="truncate">
      {/* {item.name} */}
      <span title={item.name}>{item.name}</span>
      {item?.alia?.length > 0 && (
        <span className="alia text-gray-400" title={`（${item.alia}）`}>
          {`（${item.alia}）`}
        </span>
      )}
      {item?.tns?.length > 0 && (
        <>
          <span className="alia text-gray-400" title={item.tns.toString()}>
            {`（${item.tns}）`}
          </span>
        </>
      )}
    </div>
    <Tags item={item} />
  </div>
);

export default memo(Name);
