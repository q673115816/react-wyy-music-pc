import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  IconPlayerPlay, IconMoodSmile, IconAt, IconHash,
} from '@tabler/icons';
import { apiCommentMusic, apiSongDetail, apiCommentLike } from '@/api';
import DomWrite from '@/components/Write';
import DomComment from '@/components/Comment';

export default () => {
  const { id } = useParams();
  const { search, pathname } = useLocation();
  const page = new URLSearchParams(search).get('page') || 1;
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [hotComments, setHotComments] = useState([]);
  const [value, setValue] = useState('');
  const [loading, SetLoading] = useState(true);
  const handleHotLike = async (cid, t) => {
    try {
      const { code } = await apiCommentLike({
        id,
        cid,
        t: t ? 1 : 0,
        type: 0,
      });
      if (code === 200) {
        setHotComments(hotComments.map((item) => {
          if (item.commentId === cid) {
            item.liked = t;
            item.likedCount += t ? 1 : -1;
          }
          return item;
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async (cid, t) => {
    try {
      const { code } = await apiCommentLike({
        id,
        cid,
        t: t ? 1 : 0,
        type: 0,
      });
      if (code === 200) {
        setComments(comments.map((item) => {
          if (item.commentId === cid) {
            item.liked = t;
            item.likedCount += t ? 1 : -1;
          }
          return item;
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    try {
      const { songs } = await apiSongDetail({
        ids: id,
      });
      const {
        comments = [],
        hotComments = [],
      } = await apiCommentMusic({
        id,
        offset: (page - 1) * 20,
      });
      setDetail(songs[0]);
      setHotComments(hotComments);
      setComments(comments);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  useEffect(() => {

  }, [page]);
  if (loading) return <div>loading</div>;
  return (
    <div className="domComment overflow-auto max-h-full flex-auto">
      <div className="domComment_header">
        <div className="domComment_infos">
          <div className="cover">
            <img style={{ height: '100%' }} src={`${detail.al.picUrl}?param=100y100`} alt="" />
            <div className="ico">
              <IconPlayerPlay size={16} className="fill-current" />
            </div>
          </div>
          <div className="content">
            <div className="title">{detail.name}</div>
            <div className="info">
              专辑：
              <Link className="text-gray-600 hover:text-black" to={`/playlist/album/${detail.al.id}`}>{detail.al?.name}</Link>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              歌手：
              {
                detail.ar.map((item, index) => (
                  <span key={item.id}>
                    {index > 0 && ' / '}
                    <Link className="text-gray-600 hover:text-black" to={`/artist/${item.id}`}>{item.name}</Link>
                  </span>
                ))
              }
            </div>
          </div>
        </div>
        <div className="domComment_write">
          <DomWrite {...{ value, setValue, length: 140 }} />
          <div className="domComment_write_actions">
            <button type="button">
              <IconMoodSmile stroke={1.5} />
            </button>
            &nbsp;
            <button type="button">
              <IconAt stroke={1.5} />
            </button>
            &nbsp;
            <button type="button">
              <IconHash stroke={1.5} />
            </button>
            <button type="button" className="ui_btn right">评论</button>
          </div>
        </div>
      </div>
      <div className="domComment_main">
        {
          (page === 1 && hotComments.length > 0)
          && (
            <div className="domComment_list">
              <div className="font-bold">精彩评论</div>
              {hotComments.slice(0, 10).map((item) => (
                <DomComment
                  item={item}
                  handleLike={handleHotLike}
                  key={item.commentId}
                />
              ))}
              {
                hotComments.length > 10
                && (
                  <div className="domComment_list_more flex-center">
                    <Link
                      className="ui_btn"
                      to={`${pathname}/hot`}
                    >
                      更多精彩评论 &gt;

                    </Link>
                  </div>
                )
              }
            </div>
          )
        }
        <div className="domComment_list">
          <div className="font-bold">最新评论</div>
          {comments.map((item) => (
            <DomComment
              item={item}
              handleLik={handleLike}
              key={item.commentId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
