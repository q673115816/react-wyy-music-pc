import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiDjRadioHot } from '@/api';

export default () => {
  const { id } = useParams();
  const handleInit = async () => {
    try {
      const { } = await apiDjRadioHot({
        cateId: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [id]);
  return (
    <div>djcategory</div>
  );
};
