import React, {
  memo, useEffect, useMemo, useState, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiCommentMusic, apiSimiSong } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import DomHeart from '@/components/Table/Heart';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import {
  IconHeart,
  IconFolderPlus,
  IconCloudDownload,
  IconShare,
  IconPlayerPlay,
  IconAt,
  IconPencil,
  IconMoodSmile,
} from '@tabler/icons';
import DomCommentsList from '@/components/CommentsList';
import './style.scss';
import classNames from 'classnames';

const DomLrcContext = ({ lrc = '', tlyric = '' }) => {
  const {
    currentTime,
  } = useSelector(({ audio }) => audio);
  const RefScroll = useRef();
  const RefCurrentLine = useRef();
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const reg = /^\[\d*:\d*.\d*\].*/mg;
  const tlyricList = useMemo(() => new Map(tlyric.trim() ? tlyric
    .match(reg)
    .map((line) => {
      const { time, word } = line.match(/^\[(?<time>\d*:\d*.\d*)\](?<word>.*)/).groups;
      return [time, word];
    }) : []), [tlyric]);

  const fnLrc = (line) => {
    const {
      time, min, sec, word,
    } = line.match(/^\[(?<time>(?<min>\d*):(?<sec>\d*.\d*))\](?<word>.*)/).groups;

    return {
      min,
      sec,
      word: (tlyricList?.has(time))
        ? `${word}
        ${tlyricList.get(time)}`
        : word,
    };
  };
  const lrcList = useMemo(() => lrc
    .match(reg)
    .map(fnLrc), [lrc]);
  useEffect(() => {
    setCurrentLineIndex(
      lrcList
        .findIndex(({ min, sec }) => (min * 60 + sec * 1) > currentTime) - 1,
    );
  }, [currentTime]);

  useEffect(() => {
    RefScroll.current.scrollTop = 0;
  }, [lrc]);

  useEffect(() => {
    if (RefCurrentLine?.current) {
      RefScroll.current.scrollTop = RefCurrentLine.current.offsetTop - (RefScroll.current.clientHeight / 2);
    }
  }, [currentLineIndex]);
  return (
    <div
      style={{ scrollBehavior: 'smooth' }}
      className="whitespace-pre-line select-text text-gray-500 space-y-2 overflow-auto overscroll-contain h-full"
      ref={RefScroll}
    >
      {lrcList
        .map(({ min, sec, word }, index) => (
          <div
            ref={currentLineIndex === index ? RefCurrentLine : null}
            key={min * 60 + sec * 1 + word}
            className={classNames('leading-5', currentLineIndex === index && 'font-bold text-black')}
          >
            {word.trim()}
            &nbsp;
          </div>
        ))}
    </div>
  );
};

const DomLrc = () => {
  const {
    lyric,
  } = useSelector(({ audio }) => audio);
  const {
    tlyric: { lyric: tlyric } = { lyric: '' },
    lrc: { lyric: lrc } = { lyric: '' },
  } = lyric;
  if (!lrc) return <div className="absolute inset-0 flex-center">纯音乐，请您欣赏</div>;
  return <DomLrcContext {...{ lrc, tlyric }} />;
};

const DomRight = ({ simiSong = [] }) => (
  <div className="right flex-none" style={{ width: 244 }}>
    <div>包含这首歌的歌单</div>
    <div>
      { }
    </div>
    <div>相似歌曲</div>
    <div>
      {simiSong.map((song) => (
        <button
          key={song.id}
          type="button"
          className="flex text-left w-full rounded hover:bg-gray-100 p-1.5"
          style={{ height: 60 }}
        >
          <div className="rounded relative overflow-hidden">
            <img src={`${song.album.picUrl}?param=50y50`} alt="" />
            <i className="absolute inset-0 m-auto ui_themeColor flex-center rounded-full bg-white bg-opacity-80 w-6 h-6">
              <IconPlayerPlay size={16} className="fill-current" />
            </i>
          </div>
          <div className="w-0 flex-auto px-2 py-1 text-gray-600">
            <div className="truncate">
              {song.name}
              {
                song.alias.length > 0
                && <span className="text-gray-500">{song.alias}</span>
              }
            </div>
            <div className="mt-1">{song.artists.map((artist) => artist.name)}</div>
          </div>
        </button>
      ))}
    </div>

  </div>
);

export default memo(() => {
  const { currentSong } = useSelector(({ audio }) => audio);
  const memoId = useMemo(() => currentSong.id, [currentSong]);
  const [loading, setLoading] = useState(true);
  const [simiSong, setSimiSong] = useState([]);
  const [comments, setComments] = useState({});
  const [page, setPage] = useState(1);
  const limit = 20;
  const { running } = useSelector(({ audio }) => audio);
  const handleLeftInit = async () => {
    try {
      const comments = await apiCommentMusic({
        id: memoId,
        limit,
        offset: (page - 1) * limit,
      });
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRightInit = async () => {
    try {
      const { songs } = await apiSimiSong({
        id: memoId,
      });
      setSimiSong(songs);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    await handleLeftInit();
    await handleRightInit();
    setLoading(false);
  };
  useEffect(() => {
    if (loading) {
      handleInit();
    } else {
      handleLeftInit();
    }
  }, [page]);

  return (
    <div id="lrc" className="absolute inset-x-0 bg-white overflow-auto z-20">
      <div className="lrc_inner m-auto">
        <div className="lrc_header flex justify-between">
          <div className="left">
            <div className="relative">
              <div id="stylus" className="mb-14 relative m-auto w-min duration-500 transition-transform z-10" style={running ? { transform: 'rotate(30deg)' } : {}}>
                <div className="point shadow relative transform -translate-y-1/2 rounded-full bg-gray-300 w-5 h-5 border-8 border-white bg-white" />
                <div className="handle absolute top-0 left-1/2 shadow bg-white h-2 w-48 origin-top-left" style={{ transform: 'rotate(30deg)' }}>
                  <div className="shadow w-4 h-4 absolute left-full -top-1 bg-white" />
                </div>
              </div>
              <div className={classNames('flex-center rounded-full border-8 bg-gray-300', { on: running })} id="record">
                <img className="rounded-full border-8 border-black" src={currentSong.al.picUrl} alt="" />
              </div>
            </div>
            <div className="flex mt-4 justify-between">
              <DomHeart
                stroke="2"
                id={memoId}
                size={24}
                className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"
              />
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200">
                <IconFolderPlus size={24} stroke={1} />
              </button>
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200">
                <IconCloudDownload size={24} stroke={1} />
              </button>
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200">
                <IconShare size={24} stroke={1} />
              </button>
            </div>
          </div>
          <div className="right overflow-auto pt-10">
            <div className="h1">
              {currentSong.name}
            </div>
            <div className="grid grid-cols-3 gap-1 mt-2">
              <span className="flex whitespace-nowrap">
                专辑：
                <Link to={`/playlist/album/${currentSong.al.id}`} className="text-blue-500 truncate">
                  {currentSong.al.name}
                </Link>
              </span>
              <span className="flex whitespace-nowrap">
                歌手：
                {currentSong.ar.map((artist) => (
                  <Link key={artist.id} to={`/artist/${artist.id}`} className="text-blue-500">
                    {artist.name}
                  </Link>
                ))}
              </span>
              <span className="flex whitespace-nowrap">
                来源：
              </span>
            </div>
            <div className="relative">
              <div className="absolute pointer-events-none left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent z-10" />
              <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent z-10" />
              <div className="relative mt-4" style={{ height: 330 }}>
                <DomLrc />
              </div>
            </div>
          </div>
        </div>
        <div className="lrc_main mt-14">
          <div className="flex justify-between">
            <div className="left" style={{ width: 550 }}>
              <Link to={`/comment/${memoId}`} className="text-base font-bold">评论</Link>
              <div
                className="border rounded relative p-2 mt-4 mb-10"
                style={{ height: 70 }}
              >
                <div className="flex cursor-text text-gray-500">
                  <IconPencil size={20} stroke={1} />
                  发表评论
                </div>
                <div className="absolute top-0 right-0 m-2 flex">
                  <IconMoodSmile size={20} stroke={1} className="cursor-pointer" />
                  <IconAt size={20} stroke={1} className="cursor-pointer" />
                </div>
              </div>
              {
                loading
                  ? (
                    <div className="flex justify-center">
                      <DomLoading />
                    </div>
                  )
                  : (
                    <>
                      <DomCommentsList comments={comments} more={memoId} />
                      <DomPage total={Math.ceil(comments.total / limit)} page={1} func={setPage} />
                    </>
                  )
              }
            </div>
            <div className="right flex-none" style={{ width: 244 }}>
              {
                loading
                  ? (
                    <div className="flex justify-center">
                      <DomLoading />
                    </div>
                  )
                  : <DomRight {...{ simiSong }} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
