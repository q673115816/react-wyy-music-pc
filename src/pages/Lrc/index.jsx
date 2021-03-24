import React, {
  memo, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiCommentMusic, apiSimiSong } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
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
// TOTO
const transLrc = (lrcs = '') => {
  if (!lrcs) return <div className="absolute inset-0 flex-center">纯音乐</div>;
  // console.log(lrc.match(/^\[(\d:\.)\]/m));
  // console.log(lrc.match(/^\[\d{2}:\d{2}\.\d{3}\]/mg));

  // console.log(lrcs.split('\n'));

  return (
    <div className="whitespace-pre-line text-gray-500 leading-8">
      {lrcs}
    </div>
  );
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
  const { lrc = {}, currentTime, currentSong } = useSelector(({ audio }) => audio);
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
    if (loading) {
      handleInit();
    } else {
      handleLeftInit();
    }
  }, [page]);

  return (
    <div id="lrc" className="absolute inset-x-0 bg-white overflow-auto z-30">
      <div className="lrc_inner m-auto">
        <div className="lrc_header flex justify-between">
          <div className="left">
            <div className="">
              <img src={currentSong.al.picUrl} style={{ width: 220 }} alt="" />
            </div>
            <div className="flex justify-between">
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-50 hover:bg-gray-100">
                <IconHeart size={24} stroke={1} />
              </button>
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-50 hover:bg-gray-100">
                <IconFolderPlus size={24} stroke={1} />
              </button>
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-50 hover:bg-gray-100">
                <IconCloudDownload size={24} stroke={1} />
              </button>
              <button type="button" className="w-10 h-10 flex-center rounded-full bg-gray-50 hover:bg-gray-100">
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
                  <Link key={artist.id} to={`/playlist/album/${artist.id}`} className="text-blue-500">
                    {artist.name}
                  </Link>
                ))}
              </span>
              <span className="flex whitespace-nowrap">
                来源：
              </span>
            </div>
            <div className="overflow-auto relative mt-4" style={{ height: 330 }}>
              {transLrc(lrc?.lyric)}
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
