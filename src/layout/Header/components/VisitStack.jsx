import React, { useEffect } from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons';
import { useHistory } from 'react-router-dom';

export default () => {
  const {
    goBack,
    goForward,
    listen,
  } = useHistory();

  useEffect(() => {
    const unlisten = listen((route) => {
      console.log('listen', route);
    });
    return () => {
      unlisten && unlisten();
    };
  }, []);
  return (
    <div className="domHeader_page flex space-x-2">
      <button
        type="button"
        onClick={() => goBack()}
        className="bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white"
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => goForward()}
        className="bg-black bg-opacity-5 w-6 h-6 rounded-full flex-center text-white"
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
};
