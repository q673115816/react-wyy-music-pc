import classNames from 'classnames';
import React, {
  useState,
  useEffect,
  memo,
} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  IconX,
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconMusic,
} from '@tabler/icons';
import { setGlobalLrcInset } from '@/reducers/inset/actions';
import { setGlobalLrcHide, setLyricToggle } from '@/reducers/mask/actions';
import {
  setAudioRunningToggle,
  setAudioPrev,
  setAudioNext,
} from '@/reducers/audio/actions';

const DomLrcContent = memo(() => {
  const { currentTime, lrcList } = useSelector(({ audio }) => audio);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let nextIndex = 0;
    lrcList.forEach(({ time }, index) => {
      if (time < currentTime) {
        nextIndex = index;
      }
    });
    setPercentage(() => {
      if (!(lrcList[nextIndex] && lrcList[nextIndex + 1])) return 0;
      const { time: time1 } = lrcList[nextIndex];
      const { time: time2 } = lrcList[nextIndex + 1];
      // console.log((currentTime - time) / ((min2 * 60 + sec2 * 1) - time));
      return (currentTime - time1) / (time2 - time1) * 100;
    });
    if (nextIndex === currentLineIndex) return false;
    return setCurrentLineIndex(nextIndex);
  }, [currentTime]);
  return (
    <div
      id="global_lrc_text"
      className="text-center relative text-transparent whitespace-pre-line"
      style={{
        WebkitBackgroundClip: 'text',
        backgroundImage: `linear-gradient(to right,
            var(--lrcColor) 0%,
            var(--lrcColor) ${percentage}%,
            var(--themeColor) ${percentage}%,
            var(--themeColor) 100%)`,
      }}
    >
      {lrcList?.[currentLineIndex]?.word}
      &nbsp;
    </div>
  );
});

const DomLrc = memo(() => {
  const { lrcList, currentSong } = useSelector(({ audio }) => audio);
  if (currentSong && !currentSong.name) return '网易云音乐';
  if (!lrcList.length) return <div className="absolute inset-0 flex-center">纯音乐，请您欣赏</div>;
  return <DomLrcContent />;
});

export default memo(() => {
  const dispatch = useDispatch();
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useSelector(({ inset }) => inset);
  const { globalLrcVisibility } = useSelector(({ mask }) => mask);
  const { running } = useSelector(({ audio }) => audio);
  const [dropper, setDropper] = useState(false);
  const [active, setActive] = useState(false);
  const [startInset, setStartInset] = useState({ x: 0, y: 0 });
  const [beforeInset, setBeforeInset] = useState({ x, y });
  const handleDropDown = (e) => {
    setDropper(true);
    setStartInset({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleDropMove = (e) => {
    if (!dropper) return false;
    const newx = beforeInset.x + e.clientX - startInset.x;
    const newy = beforeInset.y + e.clientY - startInset.y;
    return dispatch(setGlobalLrcInset({
      globalLrcX: newx,
      globalLrcY: newy,
    }));
  };
  const handleDropUp = () => {
    setDropper(false);
    setActive(true); //
    setBeforeInset({
      x, y,
    });
  };
  if (!globalLrcVisibility) return null;
  return (
    <div
      className={classNames('flex-center text-xl', !dropper && 'fixed')}
      style={{ width, height, ...(dropper ? { transform: `translate(${x}px, ${y}px)` } : { top: y, left: x }) }}
    >
      <div onMouseEnter={() => setActive(true)}>
        <DomLrc />
      </div>
      {
        (active || dropper)
        && (
          <div
            onMouseLeave={() => setActive(false)}
            className="absolute w-full h-full bg-black bg-opacity-20 border border-gray-400 shadow"
          >
            <div className="w-full h-full" onMouseDown={handleDropDown} />
            <div className="absolute left-0 right-0 mx-auto flex items-center space-x-4 top-0 w-min z-10 text-white my-2">
              <button type="button" className="relative z-10" onClick={() => dispatch(setLyricToggle())}>
                <IconMusic size={16} stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioPrev())}>
                <IconPlayerSkipBack size={16} className="fill-current" stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioRunningToggle())}>
                {
                  running
                    ? <IconPlayerPause size={16} className="fill-current" stroke={2} />
                    : <IconPlayerPlay size={16} className="fill-current" stroke={2} />
                }
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setAudioNext())}>
                <IconPlayerSkipForward size={16} className="fill-current" stroke={2} />
              </button>
              <button type="button" className="relative z-10" onClick={() => dispatch(setGlobalLrcHide())}>
                <IconX size={16} stroke={2} />
              </button>
            </div>
          </div>
        )
      }
      {
        dropper
        && createPortal(<div
          className="absolute inset-0 z-50"
          onMouseMove={handleDropMove}
          onMouseUp={handleDropUp}
        />, document.querySelector('#help-root'))
      }
    </div>
  );
});
