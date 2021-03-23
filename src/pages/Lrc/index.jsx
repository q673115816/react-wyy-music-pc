import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiCommentMusic } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import { Link } from 'react-router-dom';
import './style.scss';
// TOTO
const transLrc = (lrcs = '') => {
  if (!lrcs) return <div className="absolute inset-0 flex-center">纯音乐</div>;
  // console.log(lrc.match(/^\[(\d:\.)\]/m));
  // console.log(lrc.match(/^\[\d{2}:\d{2}\.\d{3}\]/mg));

  // console.log(lrcs.split('\n'));

  return (
    <div className="whitespace-pre-line">
      {lrcs.trim().split('\n').map((lrc) => {
        const time = /^\[(\d{2}:\d{2}\.\d{3})\]/.exec(lrc);
        const text = /(?<=\[\d{2}:\d{2}\.\d{3}\]).*/.exec(lrc);
        console.log(time, text);
        return (
          <div>
            {time[1]}
            {text[0]}
          </div>
        );
      })}
    </div>
  );
};

export default memo(() => {
  const { lrc = {}, currentTime, currentSong } = useSelector(({ audio }) => audio);
  const handleInit = async () => {
    try {
      const { } = await apiCommentMusic({
        limit: 20,
      });
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
          <div className="left">{}</div>
          <div className="right overflow-auto pt-10">
            <div className="h1">
              {currentSong.name}
            </div>
            <div className="flex justify-between">
              <span>
                专辑：
                <Link to={`/playlist/album/${currentSong.al.id}`} className="text-blue-500">
                  {currentSong.al.name}
                </Link>
              </span>
              <span>
                歌手：
                {currentSong.ar.map((artist) => (
                  <Link key={artist.id} to={`/playlist/album/${artist.id}`} className="text-blue-500">
                    {artist.name}
                  </Link>
                ))}
              </span>
              <span>
                来源：
              </span>
            </div>
            <div className="overflow-auto relative" style={{ height: 330 }}>
              {transLrc(lrc?.lyric)}
            </div>
          </div>
        </div>
        <div className="lrc_main">
          <div className="flex justify-center">
            <DomLoading />
          </div>
        </div>
      </div>
    </div>
  );
});
