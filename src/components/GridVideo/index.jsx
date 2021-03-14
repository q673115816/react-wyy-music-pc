import React, { memo } from 'react';
import DomItem from './Item';

export default memo(({ list = [] }) => (
  <div className="grid grid-cols-3 gap-5">
    {list.map((item) => (
      <DomItem item={item} key={item.id} />
    ))}
  </div>
));
