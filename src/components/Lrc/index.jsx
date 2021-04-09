import classNames from 'classnames';
import React, {
  useState, useEffect, useMemo, memo,
} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalLrcInset } from '@/reducers/inset/actions';

const DomLrcContent = memo(({ tlyric, lrc }) => {
  const { currentTime } = useSelector(({ audio }) => audio);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const reg = /^\[\d*:\d*.\d*\].*/mg;

  const repetition = [];

  const fnLrc = (line) => {
    const {
      time2,
      min2,
      sec2,
      time,
      min,
      sec,
      word,
    } = line.match(/^(\[(?<time2>(?<min2>\d*):(?<sec2>\d*.\d*))\])?(\[(?<time>(?<min>\d*):(?<sec>\d*.\d*))\])(?<word>.*)/).groups;
    if (time2) {
      repetition.push({
        min: min2,
        sec: sec2,
        word,
      });
    }
    return {
      min,
      sec,
      word,
    };
  };
  const lrcList = useMemo(() => lrc
    .match(reg)
    .map(fnLrc).concat(repetition), [lrc]);

  useEffect(() => {
    let nextIndex = 0;
    for (let i = 0; i < lrcList.length; i++) {
      const { min, sec } = lrcList[i];
      if ((min * 60 + sec * 1) < currentTime) {
        nextIndex = i;
      }
    }
    setPercentage(() => {
      if (!(lrcList[nextIndex] && lrcList[nextIndex + 1])) return 0;
      const { min, sec } = lrcList[nextIndex];
      const { min: min2 = 0, sec: sec2 = 0 } = lrcList[nextIndex + 1];
      // console.log((currentTime - (min * 60 + sec * 1)) / ((min2 * 60 + sec2 * 1) - (min * 60 + sec * 1)));
      return (currentTime - (min * 60 + sec * 1)) / ((min2 * 60 + sec2 * 1) - (min * 60 + sec * 1));
    });
    if (nextIndex === currentLineIndex) return false;
    return setCurrentLineIndex(nextIndex);
  }, [currentTime]);
  return (
    <span
      className="text-transparent"
      style={{
        WebkitBackgroundClip: 'text',
        backgroundImage: `linear-gradient(to right,
        var(--lrcColor) 0%,
        var(--lrcColor) ${percentage * 100}%,
        var(--themeColor) ${percentage * 100}%,
        var(--themeColor) 100%)`,
      }}
    >
      {lrcList?.[currentLineIndex]?.word}
      &nbsp;
    </span>
  );
});

const DomLrc = memo(() => {
  const { lyric, currentSong } = useSelector(({ audio }) => audio);
  const {
    tlyric: { lyric: tlyric } = { lyric: '' },
    lrc: { lyric: lrc } = { lyric: '' },
  } = lyric;
  if (currentSong && !currentSong.name) return '网易云音乐';
  if (!lrc) return <div className="absolute inset-0 flex-center">纯音乐，请您欣赏</div>;
  return <DomLrcContent {...{ tlyric, lrc }} />;
});

export default memo(() => {
  const dispatch = useDispatch();
  const {
    globalLrcX: x,
    globalLrcY: y,
    globalLrcWidth: width,
    globalLrcHeight: height,
  } = useSelector(({ inset }) => inset);
  const [dropper, setDropper] = useState(false);
  const [hoverer, setHoverer] = useState(false);
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
    setBeforeInset({
      x, y,
    });
  };
  return (
    <div
      className={classNames('z-10 flex-center text-xl', !dropper && 'fixed')}
      style={{ width, height, ...(dropper ? { transform: `translate(${x}px, ${y}px)` } : { top: y, left: x }) }}
    >
      <span onMouseOver={() => setHoverer(true)}>
        <DomLrc />
      </span>
      {
        (hoverer || dropper)
        && (
          <div
            onMouseDown={handleDropDown}
            onMouseOut={() => setHoverer(false)}
            className="absolute w-full h-full bg-black bg-opacity-20 border border-gray-400 shadow"
          />
        )
      }
      {
        dropper
        && createPortal(<div className="absolute inset-0 z-50" onMouseMove={handleDropMove} onMouseUp={handleDropUp} />, document.querySelector('#help-root'))
      }
    </div>
  );
});
