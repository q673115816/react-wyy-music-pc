import React, { FC, memo, ReactNode, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  IconMusic,
  IconCloudDownload,
  IconCloud,
  IconBrandTiktok,
  IconStar,
  IconCaretDown,
  IconCaretRight,
  IconFileMusic,
  IconLock,
  IconHistory,
  TablerIcon
} from '@tabler/icons';
import classNames from 'classnames'


interface defaultNavProps {
  name: string
  link: string
}

interface defaultNavWithIcoProps extends defaultNavProps {
  Ico?: TablerIcon
  needLogin?: boolean
}

interface CustomLinkProps extends defaultNavWithIcoProps {
  activeClassName?: string
}
const options1: defaultNavProps[] = [
  {
    name: '发现音乐',
    link: '/home',
  },
  {
    name: '视频',
    link: '/video',
  },
  {
    name: '朋友',
    link: '/friend',
  },
  {
    name: '直播',
    link: '/look',
  },
  {
    name: '私人FM',
    link: '/fm',
  },
];

const options2: defaultNavWithIcoProps[] = [
  {
    name: '本地与下载',
    link: '/message',
    Ico: IconCloudDownload,
  },
  {
    name: '最近播放',
    link: '/history',
    Ico: IconHistory,
  },
  {
    name: '我的音乐云盘',
    link: '/cloud',
    Ico: IconCloud,
    needLogin: true,
  },
  {
    name: '我的播客',
    link: '/dj',
    Ico: IconBrandTiktok,
    needLogin: true,
  },
  {
    name: '我的收藏',
    link: '/sublist',
    Ico: IconStar,
    needLogin: true,
  },
]


const CustomLink: FC<CustomLinkProps> = ({ name, link, Ico, activeClassName }) => (
  <NavLink
    className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
    activeClassName={classNames("bg-gray-100", activeClassName)}
    to={link}
  >
    {Ico && <Ico size={20} stroke={1} className="mr-1" />}
    {name}
  </NavLink>
)

interface PlaylistProps {
  name: string
  playlist: []
}

const DomPlaylist: FC<PlaylistProps> = memo(({ name, playlist }) => {
  const [showplaylist, setPlaylist] = useState(true);
  return (
    <>
      <div className="text-sm text-gray-400 mx-3 my-2">
        <div className="playlist_control flex items-center">
          <button
            type="button"
            className="_toggle flex items-center flex-auto"
            onClick={() => setPlaylist(!showplaylist)}
            title={showplaylist ? '收起' : '展开'}
          >
            {name}
            {
              showplaylist
                ? <IconCaretDown size={8} className="fill-current" />
                : <IconCaretRight size={8} className="fill-current" />
            }
          </button>
          <button type="button" title="新建歌单">+</button>
        </div>
      </div>
      {
        showplaylist
        && (
          <nav className="space-y-0.5">
            {
              playlist.map((item) => (
                <NavLink
                  key={item.id}
                  className="dommain_left_link flex text-sm p-2 items-center hover:bg-gray-100"
                  activeClassName="bg-gray-100"
                  to={`/playlist/music/${item.id}`}
                >
                  {
                    item.privacy === 10
                      ? <IconLock size={20} stroke={1} className="flex-none mr-1" />
                      : <IconMusic size={20} stroke={1} className="flex-none mr-1" />
                  }
                  <span className="truncate">
                    {item.name}
                  </span>
                </NavLink>
              ))
            }
          </nav>
        )
      }
    </>
  );
});

export default memo(() => {
  const { profile, playlist } = useSelector(({ account }) => account);
  const { isLogin } = useSelector(({ common }) => common);

  const ownPlaylist = useMemo(() => playlist
    .filter((item) => item.subscribed === false), [playlist]);
  const subscribedPlaylist = useMemo(() => playlist
    .filter((item) => item.subscribed === true), [playlist]);
  return (
    <div className="dommain_left overflow-auto max-h-full flex-none p-2.5">
      <nav className="options1 space-y-0.5">
        {
          options1.map((item) => (
            <CustomLink {...item} key={item.name} activeClassName="font-bold text-base" />
          ))
        }
      </nav>
      <div className="text-sm text-gray-400 mx-3 my-2">我的音乐</div>
      <nav className="space-y-0.5">
        {
          options2.map((item) => (!item.needLogin || item.needLogin && isLogin) && <CustomLink {...item} key={item.name} />)
        }
      </nav>
      <DomPlaylist name="创建的歌单" playlist={ownPlaylist} />
      {
        isLogin && (
          <DomPlaylist name="收藏的歌单" playlist={subscribedPlaylist} />
        )
      }
    </div>

  );
});
