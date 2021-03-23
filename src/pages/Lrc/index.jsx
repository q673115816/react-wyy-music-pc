import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { apiCommentMusic, apiSimiSong } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import { Link } from 'react-router-dom';
import {
  IconHeart, IconFolderPlus, IconCloudDownload, IconShare,
  IconPlayerPlay,
} from '@tabler/icons';
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

const DomMain = ({ simiSong, comments }) => (
  <div className="flex justify-between">
    <div className="left">{}</div>
    <div className="right" style={{ width: 244 }}>
      <div>包含这首歌的歌单</div>
      <div>
        {}
      </div>
      <div>相似歌曲</div>
      <div>
        {simiSong.map((song) => (
          <button type="button" className="flex text-left w-full rounded hover:bg-gray-100 p-1.5" style={{ height: 60 }}>
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
  </div>
);

export default memo(() => {
  const { lrc = {}, currentTime, currentSong } = useSelector(({ audio }) => audio);
  const [loading, setLoading] = useState(true);
  const [simiSong, setSimiSong] = useState([]);
  const [comments, setComments] = useState({});
  const handleInit = async () => {
    try {
      const comments = await apiCommentMusic({
        id: currentSong.id,
        limit: 20,
      });
      const { songs } = await apiSimiSong({
        id: currentSong.id,
      });
      setSimiSong(songs);
      setComments(comments);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
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
          {
            loading
              ? (
                <div className="flex justify-center">
                  <DomLoading />
                </div>
              )
              : <DomMain {...{ simiSong, comments }} />
          }
        </div>
      </div>
    </div>
  );
});
