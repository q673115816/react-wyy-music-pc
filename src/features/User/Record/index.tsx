import React, { useState, memo } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import Content from "./Content";

const Record = () => {
  const { uid } = useParams();
  const [type, setType] = useState(1);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-none">
        <div className="h1 ui_header">我的听歌排行</div>
        <div className="flex px-8 pb-2 border-b gap-x-8 text-sm">
          <button
            onClick={() => setType(1)}
            type="button"
            className={classNames("domUser_record_nav_link", {
              "font-bold": type === 1,
            })}
          >
            最近一周
          </button>
          <button
            onClick={() => setType(0)}
            type="button"
            className={classNames({
              "font-bold": type === 0,
            })}
          >
            所有时间
          </button>
        </div>
      </div>
      <Content type={type} uid={uid} />
    </div>
  );
};

export default memo(Record);
