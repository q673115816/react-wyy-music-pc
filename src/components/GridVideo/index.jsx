import React, { memo } from 'react';
import DomItem from './Item';

const defualtOptions = {
  id: 'id',
  src: 'cover',
  playCount: 'playCount',
  duration: 'duration',
  name: 'name',
};

export default memo(({ list = [], type = 'video', options = null }) => {
  options = Object.assign(defualtOptions, options);
  return (
    <div className="grid grid-cols-3 gap-5">
      {list.map((item) => (
        <DomItem item={item} key={item[options.id]} type={type} options={options} />
      ))}
    </div>
  );
});
