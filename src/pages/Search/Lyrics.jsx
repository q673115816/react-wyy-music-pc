import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
} from '@tabler/icons';

import DomLyricsItem from './components/LyricsItem';

export default ({ songs: lyrics = [] }) => (
  <div className="lyrics_list">
    <div className="thead">
      <div className="item text-gray-400">
        <div className="index" />
        <div className="heart" />
        <div className="download" />
        <div className="name">音乐标题</div>
        <div className="artist">歌手</div>
        <div className="album">专辑</div>
        <div className="duration">时长</div>
        <div className="text-gray-400">热度</div>
      </div>
    </div>
    <div className="tbody">
      {
          lyrics.map((item, index) => (
            <div
              tabIndex="2"
              key={item.id}
              className={classNames('item hover:bg-gray-100 focus:outline-none focus:bg-gray-200', { 'bg-gray-50': index % 2 === 0 })}
            >
              <div className="index text-right pr-2 text-gray-400">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="heart">
                <button type="button" className="hover:text-black text-gray-500">
                  <IconHeart size={20} stroke={1} />
                </button>
              </div>
              <div className="download">
                <button type="button" className="hover:text-black text-gray-500">
                  <IconDownload size={20} stroke={1} />
                </button>
              </div>
              <div className="name flex" title={item.name}>
                <div className="inner flex item-center">
                  <div className="text truncate">
                    <span title={item.name}>
                      {item.name}
                      {item.tns
                        && (
                          <span className="text-gray-400">
                            （
                            {item.tns.map((tns) => tns)}
                            ）
                          </span>
                        )}
                    </span>
                    {
                      item.alia.length > 0
                      && (
                        <>
                          &nbsp;
                          <span className="alia text-gray-400" title={item.alia.map((alia) => alia)}>
                            （
                            {item.alia.map((alia) => alia)}
                            ）
                          </span>
                        </>
                      )
                    }
                  </div>
                  <div className="tags">
                    {
                      item.privilege.maxbr === 999000
                      && <span className="TAG">SQ</span>
                    }
                    {item.mv !== 0
                      && (
                        <Link className="TAG" to={`/player/mv/${item.mv}`}>
                          MV
                          <IconPlayerPlay size={8} className="fill-current" />
                        </Link>
                      )}
                  </div>
                </div>
              </div>
              <div
                className="artist truncate"
                title={(item.ar.map((artist) => artist.name)).join('/')}
              >
                <div className="truncate">
                  {item.ar.map((artist) => (
                    <Link
                      className="text-gray-600 hover:text-black"
                      to={`/artist/${artist.id}`}
                      key={artist.id}
                    >
                      {artist.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div
                className="album truncate"
                title={item.al.name}
              >
                <Link className="text-gray-600 hover:text-black" to={`/playlist/album/${item.al.id}`}>
                  {item.al.name}
                </Link>
              </div>
              <div className="duration text-gray-400 truncate">
                {dayjs(item.dt).format('mm:ss')}
              </div>
              <div className="pop">
                <div className="range" style={{ '--pop': item.pop }} />
              </div>
              <DomLyricsItem lyrics={item.lyrics} />

            </div>
          ))
        }
    </div>
  </div>
);
