import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomTags from '@/components/Tags';
import DomArtists from '@/components/Table/Artists';

import DomLyricsItem from './Item';

export default ({ songs: lyrics = [] }) => (
  <div className="lyrics_list">
    <div className="thead">
      <div className="item grid items-center text-gray-400">
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
              className={classNames('item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200', { 'bg-gray-50': index % 2 === 0 })}
            >
              <div className="index text-right pr-2 text-gray-400">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="heart">
                <DomHeart />
              </div>
              <div className="download">
                <DomDownload />
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
                  <DomTags item={item} />
                </div>
              </div>
              <div
                className="artist truncate"
                title={(item.ar.map((artist) => artist.name)).join('/')}
              >
                <div className="truncate">
                  <DomArtists artists={item.ar} />
                </div>
              </div>
              <div
                className="album truncate"
                title={item.al.name}
              >
                <Link className="ui_text_black_hover" to={`/playlist/album/${item.al.id}`}>
                  {item.al.name}
                </Link>
              </div>
              <div className="duration text-gray-400 truncate">
                {dayjs(item.dt).format('mm:ss')}
              </div>
              <div className="pop">
                <div className="range w-20 h-1.5 rounded bg-gray-300">
                  <div className="h-full bg-gray-400 rounded" style={{ width: `${item.pop}%` }} />
                </div>
              </div>
              <DomLyricsItem lyrics={item.lyrics} />

            </div>
          ))
        }
    </div>
  </div>
);
