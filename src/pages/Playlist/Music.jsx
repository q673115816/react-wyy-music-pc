import React, {
  useEffect, useState, memo, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { apiPlaylistDetail, apiPlaylistSubscribe, apiSongDetail } from '@/api';

import { setToast } from '@/reducers/mask/actions';
import classNames from 'classnames';
import DomLoading from '@/components/Loading';

import produce from 'immer';
import DomHeader from './components/Header';
import DomPlaylist from './components/Playlist';
import DomComments from './components/Comments';
import DomSubscribers from './components/Subscribers';

const navs = [
  ['歌曲列表', 'playlist'],
  ['评论', 'comments'],
  ['收藏者', 'subscribers'],
];

const subpages = {
  playlist: DomPlaylist,
  comments: DomComments,
  subscribers: DomSubscribers,
};

// const DomMain = ({ status, id, songs }) => {
//   switch (status) {
//     case 'playlist':
//       return <DomPlaylist {...{ songs }} />;
//     case 'comments':
//       return <DomComments {...{ id }} />;
//     case 'subscribers':
//       return <DomSubscribers {...{ id }} />;
//     default:
//       return null;
//   }
// };

export default memo(({ id }) => {
  console.log('playlist_music');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  // const { id } = useParams();
  const [data, setData] = useState({});
  // const [privileges, setPrivileges] = useState([]);
  const [status, setStatus] = useState('playlist');
  const handleInit = async () => {
    try {
      const data = await apiPlaylistDetail({
        id,
      });
      setData(produce((draft) => {
        for (const key in data) {
          draft[key] = data[key];
        }
      }));
      if (data.playlist.trackCount > 0) {
        const { songs } = await apiSongDetail({
          ids: data.playlist.trackIds.map(({ id }) => id),
        });
        setSongs(songs);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  // TODO
  const handleSub = useCallback(async (isSub) => {
    try {
      const { code } = await apiPlaylistSubscribe({
        t: isSub ? 2 : 1,
        id,
      });
      if (code === 200) {
        dispatch(setToast(isSub ? '取消收藏成功！' : '收藏成功！'));
        setData(produce((draft) => {
          draft.playlist.subscribed = !isSub;
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    handleInit();
  }, [id]);
  if (loading) return <div className="w-full h-full flex-center"><DomLoading /></div>;
  return (
    <div className="domPlaylistDetail overflow-auto h-full">
      <DomHeader {...{ data, handleSub, songs }} />
      <div className="domPlaylistDetail_main mt-4">
        <div className="space-x-4 flex items-baseline px-8">
          {
            navs.map(([nav, code]) => (
              <button
                type="button"
                className={classNames('text-sm', status === code && 'font-bold ui_underline')}
                key={nav}
                onClick={() => setStatus(code)}
              >
                {nav}
                {nav === '评论' && `(${data.playlist.commentCount})`}
              </button>
            ))
          }
        </div>
        <div>
          {
            ((SubPage, params) => <SubPage {...params} />)(subpages[status], { id, songs })
          }
          {/* <DomMain id={id} status={status} songs={songs} /> */}
        </div>
      </div>
    </div>
  );
});
