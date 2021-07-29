import React, {
  memo, useEffect, useMemo, useState, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiCommentMusic, apiSimiSong } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import DomHeart from '@/components/Table/Heart';
import { Link, useHistory } from 'react-router-dom';
import {
  IconFolderPlus,
  IconCloudDownload,
  IconShare,
} from '@tabler/icons';
import DomCommentsList from '@/components/CommentsList';
import './style.scss';
import classNames from 'classnames';
import { setLyricHide } from '@/reducers/lrc/slice';

const DomLrc = memo(() => {
  const {
    currentTime,
  } = useSelector(({ audio }) => audio);
  const { lrcList } = useSelector(({ lrc }) => lrc);
  const RefScroll = useRef<HTMLDivElement>();
  const RefCurrentLine = useRef();
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    setCurrentLineIndex(
      lrcList
        .findIndex(({ time }) => time > currentTime) - 1,
    );
  }, [currentTime]);

  useEffect(() => {
    RefScroll.current.scrollTop = 0;
  }, [lrcList]);

  useEffect(() => {
    if (RefCurrentLine?.current) {
      RefScroll.current.scrollTop = RefCurrentLine.current.offsetTop - (RefScroll.current.clientHeight / 2);
    }
  }, [currentLineIndex]);
  return (
    <div
      style={{ scrollBehavior: 'smooth' }}
      className="whitespace-pre-line select-text text-center text-gray-500 space-y-2 overflow-auto overscroll-contain h-full pt-36"
      ref={RefScroll}
    >

      {lrcList.length ? lrcList
        .map(({ time, word }, index) => (
          <div
            ref={currentLineIndex === index ? RefCurrentLine : null}
            key={time}
            className={classNames('leading-5', currentLineIndex === index && 'font-bold text-black')}
          >
            {word.trim()}
            &nbsp;
          </div>
        )) : <div>纯音乐，请您欣赏</div>}
    </div>
  );
});

const DomRight = ({ simiSong = [] }) => (
  <div className="pb-4 relative">
    <div>播放来源：...</div>
    <div className="font-bold py-3 text-sm">包含这首歌的歌单</div>
    <div>
      { }
    </div>
    <div className="font-bold py-3 text-sm">相似歌曲</div>
    <div>
      {simiSong.map((song) => (
        <button
          key={song.id}
          type="button"
          className="flex text-left w-full rounded hover:bg-gray-100 p-1.5 h-10"
        >
          <div className="rounded relative overflow-hidden">
            <img src={`${song.album.picUrl}?param=30y30`} alt="" />
          </div>
          <div className="w-0 flex-auto px-2 py-1 text-gray-600">
            <div className="truncate">
              {song.name}
              <span className="text-gray-500">{song.alias}</span>
              &nbsp;
              -
              &nbsp;
              {song.artists.map((artist) => artist.name)}
            </div>
          </div>
        </button>
      ))}
    </div>
    <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
  </div>
);

export default memo(() => {
  const dispatch = useDispatch();
  const { listen } = useHistory();
  const { currentSong } = useSelector(({ audio }) => audio);
  const { lyricVisibility } = useSelector(({ lrc }) => lrc);
  const { running } = useSelector(({ audio }) => audio);
  const memoId = useMemo(() => currentSong.id, [currentSong]);
  const [loading, setLoading] = useState(true);
  const [simiSong, setSimiSong] = useState([]);
  const [comments, setComments] = useState({});
  const [page, setPage] = useState(1);
  const limit = 20;
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
    if (!lyricVisibility) return;
    if (loading) {
      handleInit();
    } else {
      handleLeftInit();
    }
  }, [lyricVisibility, page]);
  useEffect(() => {
    const unlisten = listen((route) => {
      dispatch(setLyricHide());
    });
    return unlisten;
  });

  if (!lyricVisibility) return null;
  return (
    <div id="lrc" className="absolute inset-x-0 z-10 overflow-hidden">
      <div className={classNames('w-full h-full bg-white overflow-auto transform')}>
        <div className="lrc_inner m-auto" style={{ width: 888 }}>
          <div className="lrc_header flex justify-between">
            <div className="left">
              <div className="relative">
                <div
                  id="stylus"
                  className="mt-16 mb-10 relative m-auto w-min duration-500 transition-transform z-10"
                  style={running ? { transform: 'rotate(40deg)' } : {}}
                >
                  <div className="point shadow relative transform -translate-y-1/2 rounded-full bg-gray-300 w-5 h-5 border-8 border-white bg-white" style={{ zIndex: 2 }} />
                  <div
                    className="handle absolute top-0 left-1/2 shadow bg-white h-2 w-20 origin-top-left"
                    style={{ transform: 'rotate(45deg) translate(0, -50%)', zIndex: 1 }}
                  >
                    <div
                      className=" absolute left-full bg-white shadow w-12 h-2 origin-top-left"
                      style={{ transform: 'rotate(-45deg) translate(-10%, 0)' }}
                    >
                      <div className="shadow w-4 h-4 absolute left-full -top-1 bg-white" />
                    </div>
                  </div>
                </div>
                <div className=" rounded-full bg-gray-300 p-2.5 w-64 h-64">
                  <div className={classNames('flex-center rounded-full p-9', { on: running })} id="record">
                    <img className="rounded-full border-8 border-black" src={currentSong.al.picUrl} alt="" />
                  </div>
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
            <div className="center overflow-auto pt-5" style={{ width: 300 }}>
              <div className="text-2xl text-center">
                {currentSong.name}
              </div>
              <div className="flex justify-center mt-2 whitespace-nowrap">
                <div className="truncate">
                  {currentSong.ar.map((artist) => (
                    <Link key={artist.id} to={`/artist/${artist.id}`} className="ui_text_gray_hover">
                      {artist.name}
                    </Link>
                  ))}
                </div>
                  &nbsp;
                -
                  &nbsp;
                <div className="truncate">
                  <Link to={`/playlist/album/${currentSong.al.id}`} className="ui_text_gray_hover">
                    {currentSong.al.name}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative mt-8" style={{ height: 330 }}>
                  <DomLrc />
                </div>
                <div className="absolute pointer-events-none left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
                <div className="absolute pointer-events-none left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
            <div className="right flex-none mt-28 h-72 overflow-auto" style={{ width: 244 }}>
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
          <div className="lrc_main mt-14 flex justify-center">
            <div style={{ width: 556 }}>
              {
                  loading
                    ? (
                      <div className="flex justify-center">
                        <DomLoading />
                      </div>
                    )
                    : (
                      <>
                        <DomCommentsList comments={comments} more={memoId} type="song" />
                        <DomPage
                        total={Math.ceil(comments.total / limit)}
                        page={page}
                        func={setPage} />
                      </>
                    )
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
