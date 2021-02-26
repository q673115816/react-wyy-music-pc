import React, { useEffect, useState } from 'react';
import { apiPlaylistSubscribers } from '@/api';
import { Link } from 'react-router-dom';
import './style.scss';
import { DomMale, DomFamale } from '@/components/Gender';

export default ({ id }) => {
  const [data, setData] = useState([]);
  const limit = 60;
  const handleInit = async () => {
    try {
      const { subscribers } = await apiPlaylistSubscribers({
        id,
        limit,
      });
      setData(subscribers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domPlaylistDetail_subscribers flex justify-between flex-wrap">
      {data.map((item) => (
        <div key={item.userId} className="item flex mt-6">
          <Link
            to={`/user/${item.userId}`}
            className="avatar border rounded-full overflow-hidden"
          >
            <img src={`${item.avatarUrl}?param=100y100`} alt="" />
          </Link>
          <div className="ml-2 flex-auto flex flex-col justify-center">
            <div className="text-sm flex items-center">
              <Link to={`/user/${item.userId}`}>
                {item.nickname}
              </Link>
              &nbsp;
              {item.gender === 1
                ? <DomMale size={16} />
                : <DomFamale size={16} />}
            </div>
            <div className="mt-2 truncate">{item.signature}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
