import React, { memo } from "react";
import Loading from "@/components/Loading";
import { useGetTopListDetailQuery } from "@/modules/services/discover";
import Detail from "./Detail";
import Item from "./Item";

const TopList = () => {
  const { data, isLoading } = useGetTopListDetailQuery();
  const list = data?.list || [];
  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <div className="ui_w1100">
        <div className="h1 mb-4">官方榜</div>
        <div className="space-y-12">
          {list.slice(0, 4).map(({ id }) => (
            <Detail id={id} key={id} />
          ))}
        </div>
        <div className="h1 mt-7 mb-4">全球榜</div>
        <div className="grid grid-cols-5 gap-5">
          {list.slice(4).map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TopList);
