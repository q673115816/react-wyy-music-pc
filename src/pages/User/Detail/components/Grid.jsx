import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IconPlayerPlay,
} from '@tabler/icons';
import { transPlayCount } from '@/common/utils';
import DomPlaylistAsyncReplace from '@/components/GroupPlay/PlaylistAsyncReplace';
import DomItem from '@/components/GridPlaylist/Item';
import { useSelector } from 'react-redux';
import RainbowCat from './RainbowCat';

const DomRank = () => {
  const { uid } = useParams();
  const { profile } = useSelector(({ account }) => account);
  // console.log(profile, uid);
  if (profile?.userId !== Number(uid)) return null;
  return (
    <div className="item">
      <Link to={(location) => `${location.pathname}/record`}>
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
        <Link to={(location) => `${location.pathname}/record`} className="">
          {/* {user.profile.nickname} */}
          听歌排行
        </Link>
      </div>
    </div>
  );
};

export default memo(({ list = [] }) => (
  <div className="domUserDetail_list px-8 grid grid-cols-4 gap-5">
    <DomRank />
    {list.map((item) => (
      <DomItem item={item} key={item.id} />
    ))}
  </div>
));
