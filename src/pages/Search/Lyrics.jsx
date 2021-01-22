import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
} from '@tabler/icons';

import DomLyricsItem from './components/LyricsItem';

export default ({ lyrics = [] }) => {
  const [songsActive, setSongsActive] = useState();

  return (
    <div className="lyrics_list">
      <div className="thead">
        <div className="item ui_gray">
          <div className="index" />
          <div className="heart" />
          <div className="download" />
          <div className="name">音乐标题</div>
          <div className="artist">歌手</div>
          <div className="album">专辑</div>
          <div className="duration">时长</div>
          <div className="ui_gray">热度</div>
        </div>
      </div>
      <div className="tbody">
        {
          lyrics.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSongsActive(item.id)}
              className={classnames('item', { on: songsActive === item.id })}
            >
              <div className="index">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="heart">
                <button type="button">
                  <IconHeart size={20} sdivoke={1} />
                </button>
              </div>
              <div className="download">
                <button type="button">
                  <IconDownload size={20} sdivoke={1} />
                </button>
              </div>
              <div className="name" title={item.name}>
                <div className="inner">
                  <div className="text truncate">
                    <span name="" title={item.name}>
                      {item.name}
                      {item.tns
                        && (
                          <span className="ui_gray">
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
                          <span className="alia ui_gray" title={item.alia.map((alia) => alia)}>
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
                className="artist truncate ui_gray hover"
                title={(item.ar.map((artist) => artist.name)).join('/')}
              >
                <div className="truncate">
                  {item.ar.map((aritst) => <Link to={`/artist/${aritst.id}`}>{aritst.name}</Link>)}
                </div>
              </div>
              <div
                className="album truncate ui_gray hover"
                title={item.al.name}
              >
                <Link to={`/playlist/album/${item.al.id}`}>
                  {item.al.name}
                </Link>
              </div>
              <div className="duration ui_gray truncate">
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
};
