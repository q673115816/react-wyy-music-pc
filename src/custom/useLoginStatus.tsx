import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { apiLoginStatus } from '@/api';

export default () => {
  const { replace } = useHistory();
  const handleLoginStatus = async () => {
    try {
      const { data: { profile } } = await apiLoginStatus();
      if (!profile) replace('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleLoginStatus();
  }, []);
};
