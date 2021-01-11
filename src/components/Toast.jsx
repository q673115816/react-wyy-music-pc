import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

export default () => {
  const { toast } = useSelector(({ common }) => common);
  const timer = useRef();

  const handleFade = () => {
  };

  useEffect(() => {
    if (toast.title) {
      handleFade();
    }
  }, [toast]);

  return (
    <div
      id="toast"
    // style={{ display: 'none' }}
    >
      {toast.title}
    </div>
  );
};
