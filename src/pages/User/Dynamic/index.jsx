import React, { useEffect, useState } from 'react';
import { apiUserEvent } from '@/api';
import { useParams } from 'react-router-dom';

export default () => {
  const [data, setData] = useState([]);
  const { uid } = useParams();

  const handleInit = async () => {
    try {
      const { events } = await apiUserEvent({
        uid,
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="overflow-auto">
      <div className="h1" />
    </div>
  );
};
