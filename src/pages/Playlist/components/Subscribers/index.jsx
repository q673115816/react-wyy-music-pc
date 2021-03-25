import React, { useEffect, useRef, useState } from 'react';
import { apiPlaylistSubscribers } from '@/api';
import {
  Link, useLocation,
} from 'react-router-dom';
import './style.scss';
import DomGender from '@/components/Gender';
import DomPage from '@/components/Page';

export default ({ id }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const limit = 60;
  const [page, setPage] = useState(1);
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
                <Link to={`/user/${item.userId}`}>
                  {item.nickname}
                </Link>
              &nbsp;
                <DomGender gender={item.gender} size={16} />
              </div>
              <div className="mt-2 truncate">{item.signature}</div>
            </div>
          </div>
        ))}
      </div>
      <DomPage
        total={Math.ceil(total / limit)}
        page={page}
        func={setPage}
      />
    </div>
  );
};
