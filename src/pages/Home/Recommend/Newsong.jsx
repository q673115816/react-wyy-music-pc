import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import { IconPlayerPlay } from '@tabler/icons';
import DomTags from '@/components/Tags';
import DomMenuCreate from '@/components/MenuCreate';

export default ({ newsong = [] }) => (
  <div className="domHome_recommend_newsong grid gap-x-2 gap-y-4 mt-4 grid-cols-3 grid-rows-4 grid-flow-col">
    {
      newsong.map((item) => (
        // <DomMenuCreate
        //   key={item.id}
        //   item={item}
        //   type="song"
        //   schema={[
        //     ['评论', '播放', '下一首播放'],
        //     ['收藏到歌单', '分享', '复制链接', '下载'],
        //     ['不感兴趣'],
        //   ]}
        // >
        <div key={item.id} className="item flex hover:bg-gray-100 rounded overflow-hidden">
          <button
            type="button"
            onClick={() => console.log(item.id)}
            className="cover flex-none relative rounded overflow-hidden ui_aspect-ratio-1/1"
          >
            <span className="ico absolute text-red-500 bg-white rounded-full bg-opacity-90 inset-0 m-auto flex-center w-6 h-6">
              <IconPlayerPlay size={16} className="fill-current" />
            </span>
            <Lazyload overflow>
              <img
                className="w-full h-full"
                src={`${item.picUrl}?param=50y50`}
                alt=""
              />
            </Lazyload>
          </button>
          <div className="content flex-auto flex flex-col w-0 px-2 py-1">
            <div className="name text-sm truncate">
              {item.name}
            </div>
            <div className="artist mt-1 flex">
              <DomTags item={item} sq={item.song.privilege.maxbr === 999000} mv={item.song.mvid} />
              <div className="truncate">
                {
                  item.song.artists.map((artist, index) => (
                    <span key={artist.id} className="text-gray-400">
                      {index > 0 && ' / '}
                      <Link
                        to={`/artist/${artist.id}`}
                        className="ui_text_gray_hover"
                      >
                        {artist.name}
                      </Link>
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>
);
