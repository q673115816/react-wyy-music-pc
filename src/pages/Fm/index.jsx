import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { apiPersonalfm } from '@/api';

export default () => {
  console.log('fm');
  // const dispatch = useDispatch();
  // const handleInit = async () => {
  //   try {
  //     const { } = await apiPersonalfm();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   handleInit();
  // }, []);
  return (
    <div className="domFm">
      <div className="domFm_header">
        {}
      </div>
      <div className="domFm_main">
        {}
      </div>
    </div>
  );
};
