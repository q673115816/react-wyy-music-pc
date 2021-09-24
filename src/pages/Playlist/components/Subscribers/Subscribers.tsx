import React, { memo, useEffect, useState } from "react";
import { apiPlaylistSubscribers } from "@/api";
import { Link } from "react-router-dom";
import "./style.scss";
import Gender from "@/components/Gender";
import Page from "@/components/Page";
// import { useQuery } from "react-query";

export default memo(({ id }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const limit = 60;
  const [page, setPage] = useState(1);
  // const {
  //   data: { subscribers, total },
  // } = useQuery("subscribers", async () => {
  //   const { subscribers, total } = await apiPlaylistSubscribers({
  //     id,
  //     limit,
  //     offset: (page - 1) * limit,
  //   });
  //   return {
  //     subscribers,
  //     total,
  //   };
  // });
  const handleInit = async () => {
    try {
      const { subscribers, total } = await apiPlaylistSubscribers({
        id,
        limit,
        offset: (page - 1) * limit,
      });
      setData(subscribers);
      setTotal(total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [page]);
  return (
    <div className="px-8">
      <div className="domPlaylistDetail_subscribers flex justify-between flex-wrap">
        {data.map((item) => (
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
      <Page total={Math.ceil(total / limit)} page={page} func={setPage} />
    </div>
  );
});
