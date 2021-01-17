import React, { useEffect, useState } from 'react';
import { apiUserEvent, apiUserDetail } from '@/api';
import { useParams } from 'react-router-dom';

export default () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const { uid } = useParams();

  const handleInit = async () => {
    try {
      const [{ profile }, { events }] = await Promise.all([
        apiUserDetail({
          uid,
        }),
        apiUserEvent({
          uid,
        }),
      ]);
      setProfile(profile);
      setData(events);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [uid]);
  return (
    <>
      <div className="h1 domUser_subpage_header ui_header">
        {profile.nickname}
        的动态
      </div>
      <div className="domUser_dynamic_main">
        <div className="list">
          {data.length > 0 ? data.map((event) => (
            <div key={event.id} />
          ))
            : <div className="empty">暂无动态</div>}
        </div>
      </div>
    </>
  );
};
