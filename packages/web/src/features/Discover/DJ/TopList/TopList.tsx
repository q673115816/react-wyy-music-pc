import dayjs from "dayjs";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { apiDJProgramTopList, apiDJTopList } from "@/api";
import { unstable_batchedUpdates } from "react-dom";
import Item from "./Item";

const formatMap = {
  false({
             lastRank,
             rank,
             score,
             program: {
               id,
               name,
               coverUrl,
               radio: { name: userName, id: userId, category }
             }
           }) {
    return {
      id,
      name,
      lastRank,
      rank,
      coverUrl,
      score,
      userName,
      userId,
      category
    };
  },
  true({
         id,
         name,
         lastRank,
         rank,
         picUrl: coverUrl,
         score,
         dj: { nickname: userName, userId },
         category
       }) {
    return {
      id,
      name,
      lastRank,
      rank,
      coverUrl,
      score,
      userName,
      userId,
      category
    };
  }
};

const TopList = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [updateTime, setUpdateTime] = useState();
  const hasParams = useMemo(() => type !== "program", [type])
  const handleInit = async (hasParams: boolean) => {
    try {
      const { toplist, updateTime } = hasParams
        ? await apiDJTopList({ type })
        : await apiDJProgramTopList();
      unstable_batchedUpdates(() => {
        setData(toplist.map(formatMap[hasParams]));
        setUpdateTime(updateTime);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const maxScore = useMemo(() => data[0]?.score ?? 0, [data]);

  useEffect(() => {
    handleInit(hasParams);
  }, [type, hasParams]);
  return (
    <div className="domHome_dj_toplist_main pt-8 relative">
      <div className="absolute flex-center bottom-full transform -translate-y-1/2 right-8 text-gray-400">
        最近更新：
        {updateTime && dayjs(updateTime).format("MM月DD日")}
        <div className="relative ui_group">
        <span className="block flex-center  border rounded-full w-4 h-4 flex-none">
          ?
        </span>
          <div
            className="absolute text-gray-500 top-6 right-0 shadow rounded p-4 w-48 border hidden ui_group-hover:block bg-white">
            选取云音乐中7天内发布的热度最高的节目，热度由节目播放、赞、分享数量总和计算
          </div>
        </div>
      </div>
      <div className="list">
        {data.map((item, index) => (
          <Item
            item={item}
            index={index}
            key={item.id}
            maxScore={maxScore}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TopList);
