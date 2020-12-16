import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import classnames from 'classnames';
import dayjs from 'dayjs';
import './style.scss';
import { transPlayCount } from '@/common/utils';
import {
  apiRelatedAllvideo, apiVideoUrl, apiVideoDetail, apiVideoDetailInfo,
  apiCommentVideo,
} from '@/api';
import { setVideoDetailRelated } from '@/redux/actions';

export default () => {
  const { vid } = useParams();
  const dispatch = useDispatch();
  // const { s } = useSelector(({ video }) => video);
  const { goBack } = useHistory();

  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [related, setRelated] = useState([]);
  const [detail, setDetail] = useState({});
  const [videoDetailInfo, setVideoDetailInfo] = useState({});
  const [comments, setComments] = useState({});
  const handleInit = async () => {
    try {
      const [
        { urls },
        { data: related = [] },
        { data: detail = {} },
        videoDetailInfo = {},
        comments = [],
      ] = await Promise.all([
        apiVideoUrl({
          id: vid,
        }),
        apiRelatedAllvideo({
          id: vid,
        }),
        apiVideoDetail({
          id: vid,
        }),
        apiVideoDetailInfo({
          vid,
        }),
        apiCommentVideo({
          id: vid,
        }),
      ]);
      setPending(true);
      setUrls(urls);
      setRelated(related);
      setDetail(detail);
      setVideoDetailInfo(videoDetailInfo);
      setComments(comments);
      // dispatch(setVideoDetailRelated({
      //   related,
      // }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  if (!pending) return <div>loading</div>;
  return (
    <div className=" overflow-auto">
      <div className="domVideoDetail">
        <div className="domVideoDetail_header domVideoDetail_container">
          <div className="left">
            <button type="button" onClick={() => goBack()}>
              <i className="bi-chevron-left" />
              <b>视频详情</b>
            </button>
          </div>
          <div className="right">
            <b>相关推荐</b>
          </div>
        </div>
        <div className="domVideoDetail_main domVideoDetail_container">
          <div className="left">
            <div id="video">
              <video src={urls[0]?.url} controls />
            </div>
            <div className="domVideoDetail_creator">
              <Link to={`/user/${detail?.creator?.userId}`}>
                <div className="avatar">
                  <img className="containimg" src={detail?.creator?.avatarUrl} alt="" />
                </div>
              </Link>
              <Link className="nickname" to={`/user/${detail?.creator?.userId}`}>
                {detail?.creator?.nickname}
              </Link>
              {
                detail?.creator?.followed
                  ? <button type="button" className="follow on">+ 已关注</button>
                  : <button type="button" className="follow">+ 关注</button>
              }
            </div>
            <div className="domVideoDetail_title h1">
              {detail?.title}
            </div>
            <div className="domVideoDetail_info gray">
              发布：
              {dayjs(detail?.publishTime).format('YYYY-MM-DD')}
              &nbsp;
              播放
              {transPlayCount(detail?.playTime)}
            </div>
            <div className="domVideoDetail_group">
              {detail?.videoGroup?.map((group) => (
                <Link className="group" to={`/video/list/${group.id}`}>{group.name}</Link>
              ))}
            </div>
            <div className="domVideoDetail_actions">
              <button type="button" className="ui_btn">
                <i className="bi-hand-thumbs-up" />
                赞
                {videoDetailInfo?.likedCount}
              </button>
              <button type="button" className="ui_btn">
                {videoDetailInfo?.likedCount}
              </button>
            </div>
            <div>
              <div>
                <b className="h1">评论</b>
                <span>{}</span>
              </div>
              <div>
                <textarea />
              </div>
            </div>
            <div>
              <div><b>精彩评论</b></div>
              <div className="domVideoDetail_comments">
                {
                  comments?.hotComments?.map((item) => (
                    <div className="item" key={item.commentId}>
                      <div className="avatar">
                        <Link to={`/user/${item.user.userId}`}>
                          <img className="ui_containimg" src={item.user.avatarUrl} alt="" />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="text">
                          <Link className="ui_link" to={`/user/${item.user.userId}`}>
                            {item.user.nickname}
                            ：
                          </Link>
                          {item.content}
                        </div>
                        <div className="info">
                          <span className="time gray">
                            {dayjs(item.time).format('YYYY-MM-DD')}
                          </span>
                          <div className="actions">
                            <div className="jubao">
                              <button type="button">
                                举报
                              </button>
                              <span />
                            </div>
                            <button type="button">
                              <i className="bi-hand-thumbs-up" />
                              {item.likedCount}
                            </button>
                            <span />
                            <button type="button">
                              <i className="bi-box-arrow-up-right" />
                            </button>
                            <span />
                            <button type="button">
                              <i className="bi-chat-text" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="right">
            <div className="domVideoDetail_related">
              {
              related.map((item) => (
                <div className="item" key={item.vid}>
                  <div className="cover">
                    <Link to={`./${item.vid}`}>
                      <img className="ui_containimg" src={item.coverUrl} alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title">
                      <Link to={`./${item.vid}`}>
                        {item.title}
                      </Link>
                    </div>
                    <div className={classnames('gray', 'username', 'text-overflow')}>
                      by &nbsp;
                      <Link to={`/user/${item.creator[0].userId}`}>
                        {item.creator[0].userName}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
