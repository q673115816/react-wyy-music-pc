import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconEdit,
  IconCheck,
  IconMail,
  IconPlus,
  IconPlayerPlay,
  IconLayoutGrid,
  IconLayoutList,
  IconList,
  IconLock,
} from '@tabler/icons';
import { transPlayCount } from '@/common/utils';
import RainbowCat from './RainbowCat';

const DomRank = () => (
  <div className="item">
    <Link to={`${url}/record`}>
      <div className="cover relative border ui_aspect-ratio-1/1">
        <div className="absolute inset-0">
          <RainbowCat />
        </div>
        <button
          type="button"
          className="playArrow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ui_themeColor absolute right-0 bottom-0 m-2 bg-white bg-opacity-90 rounded-full p-2"
        >
          <IconPlayerPlay size={22} className="fill-current" />
        </button>
      </div>
    </Link>
    <div className="footer mt-2 text-sm">
      <Link to="/" className="name">
        {user.profile.nickname}
        的听歌排行
      </Link>
    </div>
  </div>
);

export default ({ list }) => (
  <div className="domUserDetail_list px-8 grid grid-cols-4 gap-5">
    {list.map((item) => (
      <div className="item" key={item.id}>
        <div className="cover relative rounded group border overflow-hidden ui_aspect_ratio_1/1">
          <Link to={`/playlist/music/${item.id}`}>
            <img src={`${item.coverImgUrl}?param=200y200`} className="ui_containimg" alt="" />
            <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
            {item.privacy === 10
              && (
                <div className="absolute right-0 bottom-0">
                  <div
                    className="text-white bg-black w-12 h-12"
                    style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
                  >
                    <IconLock size={20} className="absolute right-1 bottom-1" />
                  </div>
                </div>
              )}
            <button
              type="button"
              className="playArrow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ui_themeColor absolute right-0 bottom-0 m-2 bg-white bg-opacity-90 rounded-full p-2"
            >
              <IconPlayerPlay size={22} className="fill-current" />
            </button>
            <div className="absolute top-0 right-0 mx-2 my-1 text-white">
              {transPlayCount(item.playCount)}
            </div>
          </Link>
        </div>
        <div className="footer mt-2 text-sm">
          <Link to={`/playlist/music/${item.id}`}>
            {item.name}
          </Link>
        </div>
      </div>
    ))}
  </div>
);
