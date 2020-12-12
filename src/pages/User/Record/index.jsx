import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiUserRecord } from '@/api';
import { setUserRecord } from '@/redux/actions';
import { useDispatch } from 'react-redux';

export default () => {
  const { uid } = useParams();
  const [type, setType] = useState(1);
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      const result = await apiUserRecord({
        uid,
        type,
      });
      if (type === 1) {
        dispatch(setUserRecord(result.weekData));
      } else if (type === 0) {
        dispatch(setUserRecord(result.allData));
      }
    } catch (error) {
      handleInit();
    }
  };
  useEffect(() => {

  }, []);
  return (
    <div className="domUser">
      {uid}
    </div>
  );
};
