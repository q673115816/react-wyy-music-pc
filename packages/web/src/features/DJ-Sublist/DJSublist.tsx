import React, { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loading from "@/components/Loading";
import classNames from "classnames";
import { useGetDJSublistQuery } from "@/modules/services/sublist";

const DJSublist = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetDJSublistQuery();
  const djRadios = data?.djRadios || [];
  const count = data?.count || 0;
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5 space-x-4">
        <span className="h1">我的播客</span>
      </div>
      <div className="ui_headerBar">
        <b className="text-sm">收藏的播客</b>
        &nbsp;
        <span className="text-gray-300">({count})</span>
      </div>
      <div className="domSublist_list">
        {djRadios.map((item, index) => (
          <div
            onClick={() => navigate(`/playlist/dj/${item.id}`)}
            key={item.id}
            className={classNames(
              "sublistItem hover:bg-gray-100 items-center cursor-pointer",
              index % 2 === 0 && "bg-gray-50"
            )}
          >
            <div className="rounded overflow-hidden border w-16 h-16">
              <img className="" src={`${item.picUrl}?param=60y60`} alt="" />
            </div>
            <div className="px-2.5 truncate">{item.name}</div>
            <div className="creator text-gray-400">
              by&nbsp;
              <Link
                onClick={(e) => e.stopPropagation()}
                to={`/user/${item.dj.userId}`}
                className="ui_text_gray_hover"
              >
                {item.dj.nickname}
              </Link>
            </div>
            <div className="text-gray-400">
              节目
              {item.programCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DJSublist);
