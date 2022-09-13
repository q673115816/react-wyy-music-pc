import React, { memo } from "react";
import TopicList from "../components/TopicList";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Content from "./Content";

const Topic = () => {
  const { id = "" } = useParams();
  return (
    <div className="flex divide-x h-full overflow-auto" id={"动态"}>
      <div className="flex-auto w-0 relative">
        <div className="pt-4">
          <Detail />
          <div className={`px-8`}>
            <div className={`text-gray-500 mt-4 text-sm`}>热门动态</div>
            <Content actid={id} />
          </div>
        </div>
      </div>
      <div className="flex-none" style={{ width: 230 }}>
        <div className="p-4 text-sm text-gray-700">推荐话题</div>
        <TopicList limit={10} />
      </div>
    </div>
  );
};

export default memo(Topic);
