import React, { useEffect, useState, memo } from "react";
import { apiDjSublist } from "@/api";
import { useNavigate, Link } from "react-router-dom";

function DJ() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { djRadios } = await apiDjSublist();
      setData(djRadios);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="domSublist_nav px-8 py-5 space-x-4">
        <span className="h1">我的播客</span>
      </div>
      <div className="domSublist_headerBar ui_headerBar">
        <b className="title">我订阅的播客</b>
        &nbsp;
        <span className="text-gray-400">({data.length})</span>
      </div>
      <div className="domSublist_list">
        {data.map((item) => (
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
