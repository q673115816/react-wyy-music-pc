import React, { useEffect, useState } from 'react';

import {
  useParams, useHistory, Link, Redirect,
} from 'react-router-dom';
import classnames from 'classnames';
import dayjs from 'dayjs';
import {
  IconChevronLeft,
  IconCaretUp,
  IconCaretDown,
  IconThumbUp,
  IconFolderPlus,
  IconScreenShare,
} from '@tabler/icons';
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
    <div className=" overflow-auto max-h-full flex-auto">
      <div className="domVideoDetail">
        <div className="domVideoDetail_header domVideoDetail_container">
          <div className="left">
            <button
              type="button"
              className="flex items-center"
              onClick={() => goBack()}
            >
              <IconChevronLeft size={28} stroke={1} />
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
              <video src={urls?.url} controls playsInline />
            </div>
            <div className="domVideoDetail_creator">
              <Link to={`/user/${detail?.creator?.userId}`}>
                <div className="avatar">
                  <img className="ui_containimg" src={detail?.creator?.avatarUrl} alt="" />
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
              className="domVideoDetail_title h1 flex items-center"
              onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            >
              {detail?.title}
              {
                descriptionVisibility
                  ? <IconCaretUp size={24} className="fill-current" />
                  : <IconCaretDown size={24} className="fill-current" />
              }
            </button>
            <div className="domVideoDetail_info text-gray-400">
              发布：
              {dayjs(detail?.publishTime).format('YYYY-MM-DD')}
              &nbsp;
              播放
              {transPlayCount(detail?.playCount)}
            </div>
            <div className="domVideoDetail_group">
              {detail?.videoGroup?.map((group) => (
                <Link className="group" to={`/video/list/${group.id}`} key={group.id}>
                  {group.name}

                </Link>
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
                <IconThumbUp size={20} stroke={1} />
                {
                  detailInfo.liked
                    ? '已赞'
                    : '赞'

                }
                (
                {detailInfo?.likedCount}
                )
              </button>
              <button type="button" className="button">
                <IconFolderPlus size={20} stroke={1} />
                收藏
                (
                {detail?.subscribeCount}
                )
              </button>
              <button type="button" className="button">
                <IconScreenShare size={20} stroke={1} />
                分享
                (
                {detailInfo?.shareCount}
                )
              </button>
            </div>
            <div className="domVideoDetail_main mt-8">
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
