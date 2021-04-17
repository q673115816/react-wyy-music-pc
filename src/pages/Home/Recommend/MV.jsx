import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import DomMenuCreate from '@/components/MenuCreate';

export default memo(({ mv = [] }) => (
  <div className="domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4">
    {
      mv.map((item) => (
        <div className="item" key={item.id}>
          <DomMenuCreate
            type="mv"
            item={item}
            schema={[
              ['评论', '播放MV'],
              ['收藏MV', '分享', '下载', '复制链接'],
              ['不感兴趣'],
            ]}
          >
            <div className="cover border relative overflow-hidden group rounded">
              <Link to={`/player/mv/${item.id}`}>
                <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
                <div className="copywriter absolute top-0 left-0 right-0 bg-black bg-opacity-40 px-2 py-3 text-white transiton delay-200 duration-100 ease-in">
                  {item.copywriter}
                </div>
                <div className="playCount absolute top-0 right-0 px-2 py-1 text-white group-hover:opacity-0">
                  {item.playCount}
                </div>
                <Lazyload overflow resize>
                  <img className="" src={item.picUrl} alt="" />
                </Lazyload>
              </Link>
            </div>
          </DomMenuCreate>
          <div className="name truncate text-sm mt-2">
            <Link className="ui_text_black_hover" to={`/player/mv/${item.id}`}>
              {item.name}
            </Link>
          </div>
          <div className="artist truncate mt-1">
            {
              item.artists.map((artist, index) => (
                <span key={artist.id} className="text-gray-400">
                  {index > 0 && ' / '}
                  <Link
                    to="/artist/:id"
                    className="ui_text_gray_hover"
                  >
                    {artist.name}
                  </Link>
                </span>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
));
