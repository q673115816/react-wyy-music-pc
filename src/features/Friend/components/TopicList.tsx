import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

const TopicList: FC<{ list: [] }> = ({ list = [] }) => (
  <div className="list">
    {list.map((item) => (
      <Link
        to={`/friend/${item.actId}`}
        key={item.actId}
        className="py-1 pl-5 flex hover:bg-gray-100"
      >
        <div className="cover w-8 h-8 flex-none">
          <img
            className="rounded"
            src={`${item.sharePicUrl}?param=50y50`}
            alt=""
          />
        </div>
        <div className="content px-2 flex-auto w-0">
          <div className="title flex items-center">
            #<span className="truncate">{item.title}</span>#
          </div>
          <div className="participateCount text-gray-300">
            {`${item.participateCount}人参与`}
          </div>
        </div>
      </Link>
    ))}
  </div>
);
export default memo(TopicList);
