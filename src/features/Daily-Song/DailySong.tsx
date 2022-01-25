import React, { memo } from "react";
import { IconFolderPlus } from "@tabler/icons";
import { SymbolToday } from "@/components/Symbol";
import useLoginStatus from "@/hooks/useLoginStatus";
import GroupPlay from "@/components/GroupPlay";
import { useGetRecommendSongsQuery } from "@/modules/services/daily";
import Loading from "@/components/Loading";
import Content from "./Content";

export default memo(function DailySong() {
  useLoginStatus();

  const { data, error, isLoading, isFetching, isSuccess, isError, refetch } =
    useGetRecommendSongsQuery();
  console.log(data, isLoading);

  if (isLoading) {
    return (
      <div className={`flex-center pt-48`}>
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full overflow-auto max-h-full flex-auto">
      <div className="px-8 pb-2.5 pt-6 border-b">
        <div className="section flex items-center">
          <div className="date w-20 h-20 ui_themeColor">
            <SymbolToday />
          </div>
          <div className="content ml-8">
            <div className="h1">每日歌曲推荐</div>
            <div className="text-gray-400 tips">
              根据你的音乐口味生成, 每天6:00更新
            </div>
          </div>
        </div>
        <div className="actions flex mt-5">
          <GroupPlay playlist={data.data.dailySongs} />
          &nbsp; &nbsp;
          <button
            type="button"
            className="inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100"
          >
            <IconFolderPlus size={22} stroke={1} />
            &nbsp; 收藏全部
          </button>
        </div>
      </div>
      <Content dailySongs={data.data.dailySongs} />
    </div>
  );
});
