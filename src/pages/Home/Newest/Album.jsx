import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { apiTopAlbum, apiAlbumNew } from '@/api';
import { setTopAlbum } from '@/reducers/home/actions';
import classNames from 'classnames';

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
    <div className="cover shadow rounded overflow-hidden">
      <Link to={`/playlist/album/${item.id}`}>
        <LazyLoad overflow>
          <img className="ui_containimg" src={`${item.blurPicUrl}?param=200y200`} alt="" />
        </LazyLoad>
      </Link>
    </div>
    <div className="name text-sm ui_ellipse mt-2">
      <Link to={`/playlist/album/${item.id}`}>
        <span className="ui_text_black_hover">
          {item.name}
        </span>
        &nbsp;
        {item.alias.length > 0
          && (
          <span className="text-gray-400">
            (
              {item.alias}
            )
          </span>
          )}
        {
          item.transNames
          && (
          <span>
              {item.transNames}
          </span>
          )
          }
      </Link>
    </div>
    <div className="artist mt-2">
      <Link to={`/artist/${item.artist.id}`} key={item.artist.id} className="ui_text_gray_hover">
        {item.artist.name}
      </Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const { monthData = [], weekData = [] } = useSelector(({ home }) => home.newest);
  // console.log(monthData, weekData);
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
      <div className="domHome_newest_sub_nav">
        {
          arealist.map((item) => (
            <button
              type="button"
              key={item.name}
              className={classNames('domHome_newest_sub_nav_link', { on: area === item.code })}
              onClick={() => setArea(item.code)}
            >
              {item.name}
            </button>
          ))
        }
        <div className="domHome_newest_sub_control_center">
          <button
            type="button"
            className={classNames('showtype', { on: showtype === 'RECOMMEND' })}
            onClick={() => setShowtype('RECOMMEND')}
          >
            推荐
          </button>
          <button
            type="button"
            className={classNames('showtype', { on: showtype === 'ALL' })}
            onClick={() => setShowtype('ALL')}
          >
            全部
          </button>
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
              <div className="list grid grid-cols-4 gap-5">
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
              <div className="list grid grid-cols-4 gap-5">
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
