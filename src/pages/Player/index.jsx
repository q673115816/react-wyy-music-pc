import React, { useEffect, useState } from 'react';

import {
  useParams, useHistory, Link, Redirect,
} from 'react-router-dom';
import classnames from 'classnames';
import dayjs from 'dayjs';
import './style.scss';

import { transPlayCount } from '@/common/utils';

import {
  apiFollow,
} from '@/api';

import Write from '@/components/Write';

import UseVideoInit from './UseVideoInit';
import UseMvInit from './UseMvInit';
import DomComments from './Comments';
import DomRelated from './Related';

export default () => {
  const { vid, type } = useParams();
  if ((type !== 'video' && type !== 'mv') || !vid) {
    return <Redirect to="/" />;
  }
  const currentInit = type === 'video' ? UseVideoInit : UseMvInit;
  const {
    pending,
    urls,
    related,
    detail,
    detailInfo,
    comments,
    handleInit,
  } = currentInit();

  const { goBack } = useHistory();
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [value, setValue] = useState('');

  const handleFollow = async () => {
    try {
      const { } = await apiFollow({
        id: detail.creator.userId,
        t: followed ? 0 : 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit(vid);
  }, [vid]);

  if (!pending) return <div>loading</div>;

  return (
    <div className=" overflow-auto">
      <div className="domVideoDetail">
        <div className="domVideoDetail_header domVideoDetail_container">
          <div className="left">
            <button type="button" onClick={() => goBack()}>
              <svg className="icon icon-tabler icon-tabler-chevron-left" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              {
                type === 'video'
                  ? <b>视频详情</b>
                  : <b>MV详情</b>
              }
            </button>
          </div>
          <div className="right">
            <b>相关推荐</b>
          </div>
        </div>
        <div className="domVideoDetail_main domVideoDetail_container">
          <div className="left">
            <div id="video">
              <video src={urls?.url} controls autoPlay />
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
              <button
                onClick={handleFollow}
                type="button"
                className={classnames('follow', { on: detail?.creator?.followed })}
              >
                {
                  detail?.creator?.followed
                    ? '+ 已关注'
                    : '+ 关注'
                }
              </button>
            </div>
            <button
              type="button"
              className="domVideoDetail_title h1"
              onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            >
              {detail?.title}
              {
                descriptionVisibility
                  ? (
                    <svg className="icon icon-tabler icon-tabler-caret-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 15l-6 -6l-6 6h12" />
                    </svg>
                  )
                  : (
                    <svg className="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                    </svg>
                  )
              }
            </button>
            <div className="domVideoDetail_info gray">
              发布：
              {dayjs(detail?.publishTime).format('YYYY-MM-DD')}
              &nbsp;
              播放
              {transPlayCount(detail?.playCount)}
            </div>
            <div className="domVideoDetail_group">
              {detail?.videoGroup?.map((group) => (
                <Link className="group" to={`/video/list/${group.id}`}>{group.name}</Link>
              ))}
            </div>
            <div
              style={{ display: descriptionVisibility ? null : 'none' }}
              className="domVideoDetail_description"
            >
              {detail.description}
            </div>
            <div className="domVideoDetail_actions">
              <button type="button" className="button">
                {
                  detailInfo.liked
                    ? (
                      <>
                        <svg className="icon icon-tabler icon-tabler-thumb-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" fill="#F0CECE" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" stroke="#EC4141" />
                        </svg>
                        已赞

                      </>
                    )
                    : (
                      <>
                        <svg className="icon icon-tabler icon-tabler-thumb-up" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                        </svg>
                        赞

                      </>
                    )
                }
                (
                {detailInfo?.likedCount}
                )
              </button>
              <button type="button" className="button">
                <svg className="icon icon-tabler icon-tabler-folder-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                  <line x1="12" y1="10" x2="12" y2="16" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                </svg>
                收藏
                (
                {detail?.subscribeCount}
                )
              </button>
              <button type="button" className="button">
                <svg className="icon icon-tabler icon-tabler-screen-share" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
                  <line x1="7" y1="20" x2="17" y2="20" />
                  <line x1="9" y1="16" x2="9" y2="20" />
                  <line x1="15" y1="16" x2="15" y2="20" />
                  <path d="M17 4h4v4" />
                  <path d="M16 9l5 -5" />
                </svg>
                分享
                (
                {detailInfo?.shareCount}
                )
              </button>
            </div>
            <div className="domVideoDetail_main">
              <div className="title">
                <b className="h1">评论</b>
                &nbsp;
                <span>
                  (
                  {detail.commentCount}
                  )
                </span>
              </div>
              <div className="domVideoDetail_feedback">
                <Write {...{
                  value,
                  setValue,
                  length: 140,
                }}
                />
              </div>
              <DomComments comments={comments} />
            </div>
          </div>
          <div className="right">
            <DomRelated related={related} />
          </div>
        </div>
      </div>
    </div>
  );
};
