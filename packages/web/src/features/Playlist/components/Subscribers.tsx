import React, { memo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Gender from "@/components/Gender";
import Page from "@/components/Page";
import Loading from "@/components/Loading";
import { useGetPlaylistSubscriberQuery } from "@/modules/services/playlist";

interface iSubscribers {
  avatarUrl: string;
  userId: number;
  nickname: string;
  gender: number;
  signature: string;
}

const limit = 60;

const Subscribers = () => {
  const { id = "" } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPlaylistSubscriberQuery({
    id,
    limit,
    offset: (page - 1) * limit,
  });
  if (isLoading)
    return (
      <div className={`flex-center pt-32`}>
        <Loading />
      </div>
    );
  return (
    <div className="px-8">
      <div className="domPlaylistDetail_subscribers flex justify-between flex-wrap">
        {data?.subscribers.map((item: iSubscribers) => (
          <div key={item.userId} className="item flex mt-6 w-80 ">
            <Link
              to={`/user/${item.userId}`}
              className="avatar w-24 h-24 border rounded-full overflow-hidden"
            >
              <img
                loading={`lazy`}
                src={`${item.avatarUrl}?param=100y100`}
                alt=""
              />
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
};

export default memo(Subscribers);
