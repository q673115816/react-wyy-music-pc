import React, { useEffect, useState, memo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { apiUserRecord } from '@/api';
import DomMenuCreate from '@/components/MenuCreate';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import DomRank from '@/components/Table/Rank';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomName from '@/components/Table/Name';
import './style.scss';

export default memo(() => {
  const { uid } = useParams();
  const { profile } = useSelector(({ account }) => account);
  // console.log(profile, uid);
  if (profile?.userId !== Number(uid)) return <Redirect to="/" />;
  const [type, setType] = useState(1);
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { allData, weekData } = await apiUserRecord({
        uid,
        type,
      });
      setData(type === 1 ? weekData : allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [type, uid]);

  return (
    <div className="domUser_record h-full flex flex-col">
      <div className="flex-none">
        <div className="h1 ui_header">我的听歌排行</div>
        <div className="domUser_record_nav px-8 pb-2 border-b space-x-8 text-sm">
          <button
            onClick={() => setType(1)}
            type="button"
            className={classNames('domUser_record_nav_link', { 'font-bold': type === 1 })}
          >
            最近一周
          </button>
          <button
            onClick={() => setType(0)}
            type="button"
            className={classNames('domUser_record_nav_link', { 'font-bold': type === 0 })}
          >
            所有时间
          </button>
        </div>
      </div>
      <div className="overflow-auto h-0 flex-auto domUser_record_main" style={{ '--ui_grid_template': '36px / 24px 24px 24px 10fr 1fr' }}>
        <div className="domUser_record_list">
          {data.map(({ song, playCount }, index) => (
            <DomMenuCreate
              item={song}
              key={song.id}
              schema={[
                [
                  '评论',
                  '播放',
                  '下一首播放',
                ],
                [
                  '收藏到歌单',
                  '分享',
                  '复制链接',
                  '下载',
                ],
              ]}
            >
              <div
                tabIndex="2"
                className={classNames('domUser_record_item focus:outline-none focus:bg-gray-200 items-center hover:bg-gray-100 ui_grid_template px-8 grid', index % 2 === 1 && 'bg-gray-50')}
              >
                <div className="index text-gray-400">
                  <DomRank id={song.id} index={index} />
                </div>
                <div className="heart">
                  <DomHeart id={song.id} />
                </div>
                <div className="download">
                  <DomDownload />
                </div>
                <div className="name">
                  <DomName item={song} />
                </div>
                <div className="playCount text-gray-400">
                  {playCount}
                  次
                </div>
              </div>
            </DomMenuCreate>
          ))}
        </div>
      </div>
    </div>
  );
});
