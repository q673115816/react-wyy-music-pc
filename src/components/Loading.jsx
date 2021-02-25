import React from 'react';
import IcoLoading from '@/assets/images/Spinner-1s-24px.svg';

export default () => (
  <div className="flex items-center">
    <img src={IcoLoading} alt="" />
    载入中...
  </div>
);
