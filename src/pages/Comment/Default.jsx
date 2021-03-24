import React, { memo, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import {
  IconPlayerPlay, IconMoodSmile, IconAt, IconHash,
} from '@tabler/icons';
import { apiCommentMusic, apiSongDetail } from '@/api';
import DomWrite from '@/components/Write';
import DomCommentsList from '@/components/CommentsList';
import DomLoading from '@/components/Loading';
import DomPage from '@/components/Page';

export default memo(() => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState({});
  const [value, setValue] = useState('');
  const [loading, SetLoading] = useState(true);
  const [page, setPage] = useState(1);
  const handleInit = async () => {
    try {
      const { songs } = await apiSongDetail({
        ids: id,
      });
      const comments = await apiCommentMusic({
        id,
        offset: (page - 1) * 20,
      });
      setDetail(songs[0]);
      setComments(comments);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [page]);

  if (loading) return <div className="w-full h-full flex-center"><DomLoading /></div>;
  return (
    <div className="domComment overflow-auto px-8 py-5 h-full">
      <div className="domComment_header">
        <div className="domComment_infos flex ">
          <div className="cover h-20 rounded overflow-hidden relative">
            <LazyLoad className="h-full">
              <img className="h-full" src={detail.al.picUrl} alt="" />
            </LazyLoad>
            <div className="ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90">
              <IconPlayerPlay size={16} className="fill-current" />
            </div>
          </div>
          <div className="content px-6 py-2">
            <div className="title text-lg">{detail.name}</div>
            <div className="info text-gray-500 mt-2 space-x-5">
              <span>
                专辑：
                <Link
                  className="ui_text_gray_hover"
                  to={`/playlist/album/${detail.al.id}`}
                >
                  {detail.al?.name}
                </Link>
              </span>
              <span>
                歌手：
                {
                  detail.ar.map((item, index) => (
                    <span key={item.id}>
                      {index > 0 && ' / '}
                      <Link
                        className="ui_text_gray_hover"
                        to={`/artist/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </span>
                  ))
                }
              </span>
            </div>
          </div>
        </div>
        <div className="domComment_write mt-4">
          <DomWrite {...{ value, setValue, length: 140 }} />
          <div className="domComment_write_actions flex mt-2.5">
            <div className="flex space-x-2">
              <button type="button" className="text-gray-500 hover:text-black">
                <IconMoodSmile size={20} stroke={1.5} />
              </button>
              <button type="button" className="text-gray-500 hover:text-black">
                <IconAt size={20} stroke={1.5} />
              </button>
              <button type="button" className="text-gray-500 hover:text-black">
                <IconHash size={20} stroke={1.5} />
              </button>
            </div>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full ml-auto">评论</button>
          </div>
        </div>
      </div>
      <div className="domComment_main mt-8">
        <DomCommentsList comments={comments} more={id} />
        <DomPage total={Math.ceil(comments.total / 20)} page={page} func={setPage} />
      </div>
    </div>
  );
});
