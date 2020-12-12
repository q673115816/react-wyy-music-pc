import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {} from '@/api';

export default () => {
  const { vid } = useParams();
  const { s } = useSelector(({ video }) => video);
  return (
    <div />
  );
};
