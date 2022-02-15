import React, { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGetDJSublistQuery } from "@/modules/services/dj";
import Loading from "@/components/Loading";

function DJ() {
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
      <div className="domSublist_nav px-8 py-5 space-x-4">
        <span className="h1">我的播客</span>
      </div>
      <div className="domSublist_headerBar ui_headerBar">
        <b className="title">我订阅的播客</b>
        &nbsp;
        <span className="text-gray-400">({count})</span>
      </div>
      <div className="domSublist_list">
        {djRadios.map((item) => (
          <div
            onClick={() => navigate(`/playlist/dj/${item.id}`)}
            key={item.id}
            className="item"
          >
            <div className="cover">
              <img className="" src={`${item.picUrl}?param=60y60`} alt="" />
            </div>
            <div className="name truncate">{item.name}</div>
            <div className="creator text-gray-400">
              by&nbsp;
              <Link
                to={`/user/${item.dj.userId}`}
                className="ui_text_gray_hover"
              >
                {item.dj.nickname}
              </Link>
            </div>
            <div className="size text-gray-400">
              节目
              {item.programCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(DJ);
