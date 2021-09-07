import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { apiLoginStatus } from '@/api';

export const handleLoginStatus = async (callback: any) => {
  try {
    const { data: { profile } } = await apiLoginStatus();
    callback && callback(profile)
  } catch (error) {
    console.log(error);
  }
};

export default () => {
  const { replace } = useHistory();
  useEffect(() => {
    handleLoginStatus((profile: any) => {
      if (!profile) replace('/');
    });
  }, []);
};
