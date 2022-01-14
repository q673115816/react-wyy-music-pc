import React, { memo, useEffect, useState } from "react";
import { apiPlaylistSubscribers } from "@/api";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import Gender from "@/components/Gender";
import Page from "@/components/Page";
import Loading from "@/components/Loading";

interface iSubscribers {
  avatarUrl: string;
  userId: number;
  nickname: string;
  gender: number;
  signature: string;
}

const limit = 60;

export default memo(function Subscribers() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    const { subscribers, total } = await apiPlaylistSubscribers({
      id,
      limit,
      offset: (page - 1) * limit,
    });
    setData({
      subscribers,
      total,
    });
    setLoading(false);
  };

  useEffect(() => {
    handleInit();
  }, []);

  if (loading)
    return (
      <div className={`flex-center pt-32`}>
        <Loading />
      </div>
    );
  return (
    <div className="px-8">
      <div className="domPlaylistDetail_subscribers flex justify-between flex-wrap">
        {data?.subscribers.map((item: iSubscribers) => (
          <div key={item.userId} className="item flex mt-6">
            <Link
              to={`/user/${item.userId}`}
              className="avatar border rounded-full overflow-hidden"
            >
              <img src={`${item.avatarUrl}?param=100y100`} alt="" />
            </Link>
            <div className="ml-2 flex-auto w-0 flex flex-col justify-center">
              <div className="text-sm flex items-center">
                <Link to={`/user/${item.userId}`}>{item.nickname}</Link>
                &nbsp;
                <Gender gender={item.gender} size={16} />
              </div>
              <div className="mt-2 truncate">{item.signature}</div>
            </div>
          </div>
        ))}
      </div>
      <Page total={Math.ceil(data?.total / limit)} page={page} func={setPage} />
    </div>
  );
});
