import React from 'react';
import { useSelector } from 'react-redux';
import { IconVolume, IconVolume3, Iconvol } from '@tabler/icons';

export default ({ id, index }) => {
  const { currentSong, running } = useSelector(({ audio }) => audio);
  if (currentSong.id === id) {
    return (
      <div className="ui_themeColor flex justify-end">
        {running ? <IconVolume className="fill-current" size={20} />
          : <IconVolume3 className="fill-current" size={20} />}
      </div>
    );
  }
  return (
    <div className="text-right text-gray-300">
      {String(index + 1).padStart(2, 0)}
    </div>
  );
};
