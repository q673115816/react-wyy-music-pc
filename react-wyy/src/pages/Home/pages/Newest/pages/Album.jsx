import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { apiTopAlbum, apiAlbumNew } from '@/api';
import { setTopAlbum } from '@/redux/actions';

import { limit } from '@/common/config';

const arealist = [
  {
    name: '全部',
    code: 'ALL',
  },
  {
    name: '华语',
    code: 'ZH',
  },
  {
    name: '欧美',
    code: 'EA',
  },
  {
    name: '韩国',
    code: 'KR',
  },
  {
    name: '日本',
    code: 'JP',
  },
];

const AlbumItem = ({ item }) => (
  <div className="item">
    <div className="cover">
      <Link to="/">
        <LazyLoad overflow>
          <img className="containimg" src={`${item.blurPicUrl}?param=200y200`} alt="" />
        </LazyLoad>
      </Link>
    </div>
    <div className="name">
      <Link to="/">{item.name}</Link>
    </div>
    <div className="artist">
      <Link to="/artist" key={item.artist.id}>{item.artist.name}</Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const { monthData = [], weekData = [] } = useSelector(({ home }) => home.newest);
  console.log(monthData, weekData);
  const [area, setArea] = useState('ALL');
  const [type, setType] = useState('new');
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [offset, setOffset] = useState(0);

  const [showtype, setShowtype] = useState('RECOMMEND');
  const handleGetData = async () => {
    try {
      if (showtype === 'RECOMMEND') {
        const { monthData, weekData } = await apiTopAlbum({
          area,
          type,
          limit,
          offset,
        });
        dispatch(setTopAlbum({ monthData: monthData.slice(0, 564), weekData }));
      } else {
        const { albums: monthData, weekData } = await apiAlbumNew({
          area,
          type,
          limit,
          offset,
        });
        dispatch(setTopAlbum({ monthData, weekData }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [area, type, showtype]);
  return (
    <>
      <span>{monthData.length}</span>
      <div className="domHome_newest_sub_nav">
        {
                    arealist.map((item) => (
                      <span
                        key={item.name}
                        className={['domHome_newest_sub_nav_link', area === item.code ? 'on' : null].join(' ')}
                        onClick={() => setArea(item.code)}
                      >
                        {item.name}
                      </span>
                    ))
                }
        <div className="domHome_newest_sub_control_center">
          <span
            className={['showtype', showtype === 'RECOMMEND' ? 'on' : null].join(' ')}
            onClick={() => setShowtype('RECOMMEND')}
          >
            推荐
          </span>
          <span
            className={['showtype', showtype === 'ALL' ? 'on' : null].join(' ')}
            onClick={() => setShowtype('ALL')}
          >
            全部
          </span>
        </div>
      </div>
      <div className="domHome_newest_album_list">
        {
                    area === 'ALL' && showtype !== 'ALL' && weekData.length > 0
                    && (
                    <div className="domHome_newest_album_sublist">
                      <div className="sign">
                        本周
                        <br />
                        新碟
                      </div>
                      <div className="list">
                        {weekData.map((item) => (
                          <AlbumItem item={item} key={item.id} />
                        ))}
                      </div>
                    </div>
                    )
                }
        {
                    monthData.length > 0
                    && (
                    <div className="domHome_newest_album_sublist">
                      <div className="sign">
                        本月
                        <br />
                        新碟
                      </div>
                      <div className="list">
                        {
                                monthData.map((item) => (
                                  <AlbumItem item={item} key={item.id} />
                                ))
                            }
                      </div>
                    </div>
                    )
                }
      </div>
    </>
  );
};
