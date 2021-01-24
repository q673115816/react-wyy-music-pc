import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUserRecord } from '@/api';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { IconHeart, IconDownload } from '@tabler/icons';
import './style.scss';

export default () => {
  const { uid } = useParams();
  const dispatch = useDispatch();
  const [type, setType] = useState(1);
  const [focus, setFocus] = useState();
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
    setFocus();
  }, [type, uid]);

  return (
    <div className="domUser_record">
      <div className="h1 ui_header">我的听歌排行</div>
      <div className="domUser_record_nav">
        <button
          onClick={() => setType(1)}
          type="button"
          className={classnames('domUser_record_nav_link', { on: type === 1 })}
        >
          最近一周
        </button>
        <button
          onClick={() => setType(0)}
          type="button"
          className={classnames('domUser_record_nav_link', { on: type === 0 })}
        >
          所有时间
        </button>
      </div>
      <div className="overflow-auto max-h-full flex-auto domUser_record_main">
        <div className="domUser_record_list">
          {data.map(({ song, playCount }, index) => (
            <div
              onClick={() => setFocus(index)}
              className={classnames('domUser_record_item', { on: focus === index })}
              type="button"
              key={song.id}
            >
              <div className="index text-gray-400">{String(index + 1).padStart(2, 0)}</div>
              <div className="heart">
                <button type="button" className="text-gray-400 hover">
                  <IconHeart size={18} stroke={1} />
                </button>
              </div>
              <div className="download">
                <button type="button" className="text-gray-400 hover">
                  <IconDownload size={18} stroke={1} />
                </button>
              </div>
              <div className="name">
                <div className="truncate">
                  { song.name}
                  {
                    song.alia.map((alia) => (
                      <span className="text-gray-400" key={alia}>
                        （
                        {alia}
                        ）
                      </span>
                    ))
                  }
                </div>
                {

                  song.privilege.maxbr === 999000
                  && <div className="TAG">SQ</div>
                }
                {
                  song.mv !== 0
                  && <div className="TAG">MV</div>
                }
              </div>
              <div className="playCount text-gray-400">
                {playCount}
                次
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
