import React from 'react';

export default ({ children, 'data-title': title }) => (
  <div className="nav_target" data-title={title}>
    {children}
  </div>
);
