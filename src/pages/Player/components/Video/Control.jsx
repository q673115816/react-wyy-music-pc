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

const DomSpeed = () => (
  <div className="relative w-20">
    {}
  </div>
);

const DomSize = () => {
  const [sizeListShow, setSizeListShow] = useState(false);
  const [curr, setCurr] = useState('超清');
  const handleCheck = (br) => {
    setCurr(br);
    setSizeListShow(false);
  };
  return (
    <div className="relative w-16">
      <button
        onClick={() => setSizeListShow(!sizeListShow)}
        type="button"
        className="flex-center w-full group"
      >
        <IconDeviceDesktop className="text-gray-600 group-hover:text-gray-400" size={20} />
        &nbsp;
        <span className="text-gray-400">
          {curr}
        </span>
      </button>
      {
        sizeListShow
        && (
          <div className="absolute left-0 right-0 bottom-full border text-white divide-y divide-gray-400 transform -translate-y-4 bg-black bg-opacity-80 border-gray-400 text-center">
            {
              sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="black w-full py-1"
                  onClick={() => handleCheck(size)}
                >
                  {size}
                </button>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default () => {
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
        {/* <DomSpeed /> */}
        <DomSize />
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
