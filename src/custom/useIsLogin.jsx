import React, { useEffect, useState } from 'react';
import { apiLoginStatus } from '@/api';

export default () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleCheck = async () => {
    try {
      const { data: { profile } } = await apiLoginStatus();
      setIsLogin(!!profile);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCheck();
  }, []);
  return [
    isLogin,
  ];
};
