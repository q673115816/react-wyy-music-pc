import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import useInfinite from "@/hooks/useInfinite";
import Dynamic from "@/components/Dynamic";
import TopicList from "./components/TopicList";
import { useParams } from "react-router-dom";
import Detail from "./components/Detail";
import { useGetTopicDetailEventHotQuery } from "@/modules/services/friend";
import { useImmer } from "use-immer";

export default memo(function Topic() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetTopicDetailEventHotQuery({ actid: id });
  const list = data?.events || [];
  return (
    <div className="h-full overflow-auto">
      <div className="flex divide-x">
        <div className="flex-auto w-0">
          <div className="px-8 pt-4">
            <Detail />
            <div className={`text-gray-500 mt-4 text-sm`}>热门动态</div>
            <Dynamic list={list} />
          </div>
        </div>
        <div className="flex-none" style={{ width: 230 }}>
          <div className="p-4 text-sm text-gray-700">推荐话题</div>
          <TopicList limit={10} />
        </div>
      </div>
    </div>
  );
});
