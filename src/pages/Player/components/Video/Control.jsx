import React, { useState, useContext } from 'react';
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconDeviceDesktop,
} from '@tabler/icons';
import dayjs from 'dayjs';
import { VideoContext } from './index';

const sizes = [
  '标清',
  '高清',
  '超清',
  '1080P',
];

export default () => {
  const [sizeChange, setSizeChange] = useState(false);
  const {
    handlechangeFull,
    full,
    handleChangePlay,
    play,
    currentTime,
    duration,
  } = useContext(VideoContext);
  return (
    <div className="h-10 flex-none bg-black flex items-center pl-2">
      <button
        type="button"
        className="border rounded-full text-white border-current w-6 h-6 flex-center"
        onClick={handleChangePlay}
      >
        {
          play
            ? <IconPlayerPause className="fill-current" size={12} />
            : <IconPlayerPlay className="fill-current" size={12} />
        }
      </button>
      <span className="text-gray-300 ml-2">
        {dayjs(currentTime * 1000).format('mm:ss')}
        &nbsp;
        /
        &nbsp;
        {dayjs(duration * 1000).format('mm:ss')}
      </span>
      <div className="ml-auto flex divide-x">
        <div className="flex">
          <button type="button">{ }</button>
          <div>{ }</div>
        </div>
        <div className="relative w-20">
          <button
            onClick={() => setSizeChange(!sizeChange)}
            type="button"
            className="flex-center w-full group"
          >
            <IconDeviceDesktop className="text-gray-600 group-hover:text-gray-400" size={20} />
            <span className="text-gray-400">
              超清
            </span>
          </button>
          {
            sizeChange
            && (
              <div className="absolute left-0 right-0 bottom-full border text-white divide-y divide-gray-800 transform -translate-y-4 flex flex-col bg-black bg-opacity-80 border-gray-800">
                {
                  sizes.map((size) => (
                    <button type="button" className="text-right py-2 px-4">{size}</button>
                  ))
                }
              </div>
            )
          }
        </div>
        <button
          onClick={handlechangeFull}
          type="button"
          className="flex-center w-10 text-gray-400 hover:text-white"
        >
          {
            full
              ? <IconArrowsMinimize size={20} stroke={1} />
              : <IconArrowsMaximize size={20} stroke={1} />
          }
        </button>
      </div>
    </div>
  );
};
