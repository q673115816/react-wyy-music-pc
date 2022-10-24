import React, { memo } from "react";
import { useGetDJCateListQuery } from "@/modules/services/dj";
import { Link } from "react-router-dom";
import { IconChartBar } from "@tabler/icons";
import Loading from "@/components/Loading";

const Category = () => {
  const { data: resCateList, isLoading } = useGetDJCateListQuery();

  const catelist = resCateList?.categories || [];
  if (isLoading) return <Loading />;
  return (
    <div
      style={{ width: 296, height: 168 }}
      className={`bg-red-50 flex flex-col flex-wrap overflow-auto p-4`}
    >
      <Link to="/TopList" className={`h-1/2 w-1/4`}>
        <div className="flex-center flex-col">
          <div className="flex-center ui_redColor w-8 h-8">
            <IconChartBar size={24} stroke={0.5} />
          </div>
          <div className="text-gray-500 mt-2">排行榜</div>
        </div>
      </Link>
      {catelist.map((item) => (
        <Link
          to={`/dj-category/${item.name}/${item.id}`}
          className={`h-1/2 w-1/4`}
          key={item.id}
        >
          <div className="flex-center flex-col">
            <div className="flex-center ui_themeColor">
              <img className="w-8 h-8" src={item.pic56x56Url} alt="" />
            </div>
            <div className="text-gray-500 mt-2">{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default memo(Category);
