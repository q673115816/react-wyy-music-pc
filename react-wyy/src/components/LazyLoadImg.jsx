import React from 'react';
import Lazyload from 'react-lazyload';

const Load = () => (
  <div className="loadingio-spinner-pulse-ebgmdp29yfs">
    <div className="ldio-mnt0dbe7nim">
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default ({ children, ...props }) => (
  <Lazyload style={{ width: '100%', height: '100%' }} {...props} placeholder={<Load />}>
    {children}
  </Lazyload>
);
