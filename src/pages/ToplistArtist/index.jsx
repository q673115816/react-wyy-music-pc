import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { apiToplistArtist } from '@/api';
import './style.scss';

const navs = [
  ['华语', '1'],
  ['欧美', '2'],
  ['韩国', '3'],
  ['日本', '4'],
];

export default () => {
  const { type = 1 } = useParams();
  const [artist, setArtist] = useState([]);
  const [updateTime, setUpdateTime] = useState(0);
  const handleGetArtist = async () => {
    try {
      const { list } = await apiToplistArtist(type);
      setArtist(list.artists);
      setUpdateTime(list.updateTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetArtist();
  }, [type]);
  const top3 = artist.slice(0, 3);
  const other = artist.slice(3);
  return (
    <div className="domtoplistartist flex flex-col h-full">
      <div className="domtoplistartist_header">
        <div className="domtoplistartist_title h1">云音乐歌手榜</div>
        <div className="flex items-baseline justify-between mt-6">
          <div className="domtoplistartist_nav flex space-x-6">
            {
              navs.map(([name, link]) => (
                <NavLink
                  key={name}
                  className="domtoplistartist_nav_link text-sm"
                  activeClassName="font-bold"
                  to={link}
                >
                  {name}
                </NavLink>
              ))
            }
          </div>
          <div className="text-gray-400">
            更新时间：
            {dayjs(updateTime).format('MM月DD日')}
          </div>
        </div>
      </div>
      <div className="overflow-auto h-full pb-10">
        <div className="domtoplistartist_top3_list grid grid-cols-3 gap-x-5">
          {top3.map((item, index) => (
            <Link
              className="domtoplistartist_top3_link rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 flex relative"
              to={`/artist/${item.id}`}
              key={item.id}
              style={{ height: 100 }}
            >
              <div className="absolute text-red-300 text-4xl">
                {index + 1}
              </div>
              <div className="flex-auto flex flex-col justify-center pl-8">
                <div className="text-sm">
                  {item.name}
                </div>
                <div className="score text-gray-400 mt-2">
                  热度：
                  {item.score}
                </div>
              </div>
              <div className="cover border">
                <img src={`${item.picUrl}?param=100y100`} alt="" />
              </div>
            </Link>
          ))}
        </div>
        <div className="domtoplistartist_other_list">
          {other.map((item, index) => (
            <Link
              className={classnames('domtoplistartist_other_link flex items-center h-20 hover:bg-gray-100', { 'bg-gray-50': index % 2 === 0 })}
              to={`/artist/${item.id}`}
              key={item.id}
            >
              <div className="index flex flex-col items-center justify-center w-16 text-gray-400">
                <div className="text-sm">
                  {index + 4}
                </div>
                <div>
                  {item.lastRank === index + 3 && '-0'}
                  {item.lastRank > index + 3 && (
                    <div>
                      <span className="text-red-500">↑</span>
                      {item.lastRank - index - 3}
                    </div>
                  )}
                  {item.lastRank < index + 3 && (
                  <div>
                    <span className="text-blue-500">↓</span>
                    {index + 3 - item.lastRank}
                  </div>
                  )}
                </div>
              </div>
              <div className="cover rounded overflow-hidden">
                <img src={`${item.picUrl}?param=100y100`} alt="" />
              </div>
              <div className="name flex-auto text-sm pl-2">{item.name}</div>
              <div className="score text-gray-400 w-32">
                热度：
                {item.score}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
