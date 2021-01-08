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
    listen((route) => {
      console.log('listen', route);
    });
  }, []);
  return (
    <div className="domHeader_page">
      <button
        type="button"
        onClick={() => goBack()}
        className="domHeader_page_prev flex-center"
      >
        <IconChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={() => goForward()}
        className="domHeader_page_next flex-center"
      >
        <IconChevronRight size={16} />
      </button>
    </div>
  );
};
