import React, {
  memo, useEffect, useState,
} from 'react';
import { apiCommentMusic, apiSimiSong } from '@/api';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';
import { useHistory } from 'react-router-dom';

import DomCommentsList from '@/components/CommentsList';
import './style.scss';
import { setLyricHide } from '@/reducers/lrc/slice';
import { useAppDispatch, useAppSelector } from '@/reducers/hooks'
import Left from './components/Left';
import Center from './components/Center'
import Right from './components/Right';

export default memo(() => {
  const dispatch = useAppDispatch();
  const { listen } = useHistory();
  const { currentSong } = useAppSelector(({ audio }) => audio);
  const { lyricVisibility } = useAppSelector(({ lrc }) => lrc);
  const [loading, setLoading] = useState(true);
  const [simiSong, setSimiSong] = useState([]);
  const [comments, setComments] = useState({});
  const [page, setPage] = useState(1);
  const limit = 20;
  const handleLeftInit = async () => {
    try {
      const comments = await apiCommentMusic({
        id: currentSong.id,
        limit,
        offset: (page - 1) * limit,
      });
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRightInit = async () => {
    try {
      const { songs } = await apiSimiSong({
        id: currentSong.id,
      });
      setSimiSong(songs);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    await handleLeftInit();
    await handleRightInit();
    setLoading(false);
  };
  useEffect(() => {
    if (!lyricVisibility) return;
    if (loading) handleInit();
    else handleLeftInit();
  }, [lyricVisibility, page, currentSong.id]);
  useEffect(() => {
    const unlisten = listen((route) => {
      dispatch(setLyricHide());
    });
    return unlisten;
  }, []);

  if (!lyricVisibility) return null;
  return (
    <div id="lrc" className="absolute inset-x-0 z-10 overflow-hidden">
      <div className="w-full h-full bg-white overflow-auto transform">
        <div className="lrc_inner m-auto" style={{ width: 888 }}>
          <div className="lrc_header flex justify-between">
            <Left />
            <Center />
            <Right {...{ simiSong, loading }} />
          </div>
          <div className="lrc_main mt-14 flex justify-center">
            <div style={{ width: 556 }}>
              {
                loading
                  ? (
                    <div className="flex justify-center">
                      <DomLoading />
                    </div>
                  )
                  : (
                    <>
                      <DomCommentsList comments={comments} more={currentSong.id} type="song" />
                      <DomPage
                        total={Math.ceil(comments.total / limit)}
                        page={page}
                        func={setPage} />
                    </>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
