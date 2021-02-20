import React, {
  memo, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { IconCircleCheck } from '@tabler/icons';
import { setToast } from '@/redux/actions';

export default memo(() => {
  const { toastTitle } = useSelector(({ mask }) => mask);
  // const [time, setTime] = useState(1500);
  const time = useRef(1500);
  const timer = useRef();
  const prevTime = useRef();
  const dispatch = useDispatch();
  const handleFadeout = () => {
    if (time.current <= 0) return;
    time.current -= (Date.now() - prevTime.current);

    prevTime.current = Date.now();
    requestAnimationFrame(handleFadeout);
  };
  console.log('123123');
  useEffect(() => {
    if (toastTitle) {
      time.current = 1500;
      handleFadeout();
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        // console.log(111);
        dispatch(setToast({ toastTitle: '' }));
      }, 1500);
    }
  }, [toastTitle]);

  return (
    <div
      id="toast"
      className={classnames('absolute inset-0 m-auto flex-center rounded-lg bg-black bg-opacity-80 text-gray-200 text-lg')}
      style={{ display: toastTitle ? null : 'none' }}
    >
      <IconCircleCheck size={24} />
      &nbsp;
      {toastTitle}
    </div>
  );
});
