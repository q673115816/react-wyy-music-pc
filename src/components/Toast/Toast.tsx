import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { IconCircleCheck } from "@tabler/icons";
import { setToast } from "@/reducers/mask/slice";
import "./style.scss";

export default memo(() => {
  const { toastTitle } = useSelector(({ mask }) => mask);
  // const [time, setTime] = useState(1500);
  const time = useRef(1500);
  const timer = useRef();
  const prevTime = useRef();
  const dispatch = useDispatch();
  const handleFadeout = () => {
    if (time.current <= 0) return;
    time.current -= Date.now() - prevTime.current;

    prevTime.current = Date.now();
    requestAnimationFrame(handleFadeout);
  };
  // console.log('123123');
  useEffect(() => {
    if (!toastTitle?.toString()) return false;
    time.current = 1500;
    handleFadeout();
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dispatch(setToast(""));
    }, 1500);
  }, [toastTitle]);
  if (!toastTitle?.toString()) return null;
  return (
    <div
      id="toast"
      className={classNames(
        "absolute z-50 whitespace-nowrap px-4 inset-0 m-auto flex-center rounded-lg bg-black bg-opacity-80 text-gray-200 text-lg"
      )}
    >
      <IconCircleCheck size={24} />
      &nbsp;
      {toastTitle?.toString()}
    </div>
  );
});
