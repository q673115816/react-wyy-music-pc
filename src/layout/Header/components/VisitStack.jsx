import React, { useEffect, memo, useState } from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import produce from 'immer';

export default memo(() => {
  const {
    goBack,
    goForward,
    listen,
  } = useHistory();
  const [stackIn, setStackIn] = useState([]);
  const [stackOut, setStackOut] = useState([]);

  useEffect(() => {
    const unlisten = listen((route) => {
      // console.log(window.history);
      // console.log(route);
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div className="domHeader_page flex space-x-2">
      <button
        type="button"
        onClick={() => goBack()}
        className={classNames('focus:outline-none bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10', stackIn.length === 0 && 'text-opacity-25')}
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => goForward()}
        className={classNames('focus:outline-none bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white z-10', stackOut.length === 0 && 'text-opacity-25')}
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
});
