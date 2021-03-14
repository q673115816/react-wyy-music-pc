import React, {
  useEffect, useMemo, useState, useRef,
} from 'react';

import {
  useParams, useHistory, Link, Redirect,
} from 'react-router-dom';
import classNames from 'classnames';
import dayjs from 'dayjs';
import {
  IconChevronLeft,
  IconCaretUp,
  IconCaretDown,
  IconThumbUp,
  IconFolderPlus,
  IconCheckbox,
  IconScreenShare,
} from '@tabler/icons';
import './style.scss';

import { transPlayCount } from '@/common/utils';

import {
  apiFollow,
  apiVideoSub,
  apiMVSub,
  apiMVSublist,
} from '@/api';
import { setToast } from '@/reducers/mask/actions';
import { setMVSublist } from '@/reducers/account/actions';

import Write from '@/components/Write';

import { useDispatch, useSelector } from 'react-redux';
import UseVideoInit from './UseVideoInit';
import UseMVInit from './UseMVInit';
import DomComments from './Comments';
import DomRelated from './Related';
import DomVideo from './components/Video';

const switchs = {
  video: {
    init: UseVideoInit,
    name: '视频详情',
    sub: 'subscribeCount',
  },
  mv: {
    init: UseMVInit,
    name: 'MV详情',
    sub: 'subCount',
  },
};

export default () => {
  const { vid, type } = useParams();
  if (!['video', 'mv'].includes(type) || !vid) {
    return <Redirect to="/" />;
  }
  const dispatch = useDispatch();
  const { mvSublist } = useSelector(({ account }) => account);
  // const currentInit = type === 'video' ? UseVideoInit : UseMVInit;
  const {
    pending,
    urls,
    related,
    detail,
    detailInfo,
    comments,
    handleInit,
  } = switchs[type].init();

  const DomVideoWrap = useRef();
  const DomScroll = useRef();
  const Io = useRef();
  const [fixed, setFixed] = useState(false);

  const handleIo = () => {
    Io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFixed(false);
        } else {
          setFixed(true);
        }
      });
    }, {
      root: DomScroll.current,
    });
    Io.current.observe(DomVideoWrap.current);
  };

  const handleUnIo = () => {
    Io.current.disconnect();
  };
  const isSub = useMemo(() => mvSublist.find((mv) => mv.vid === vid), [vid, mvSublist]);

  const { goBack } = useHistory();
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [value, setValue] = useState('');

  const handleDownload = (href) => {
    // const a = document.createElement('a');
    // a.setAttribute('download', href);
    // a.href = href;
    // a.click();
  };

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

  const handleGetMVSublist = async () => {
    try {
      const { data: mvSublist } = await apiMVSublist();
      dispatch(setMVSublist({
        mvSublist,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSub = async () => {
    try {
      const { code } = type === 'video' ? await apiVideoSub({
        id: vid,
        t: isSub ? 0 : 1,
      }) : await apiMVSub({
        mvid: vid,
        t: isSub ? 0 : 1,
      });
      if (code === 200) handleGetMVSublist();
      dispatch(setToast({ toastTitle: isSub ? '取消收藏成功' : '收藏成功' }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit(vid);
  }, [vid]);

  useEffect(() => {
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);

  return (
    <div className=" overflow-auto h-full" ref={DomScroll}>
      <div style={{ width: 930 }} className="flex justify-between m-auto">
        <div className="left" style={{ width: 620 }}>
          <div className="domVideoDetail_header flex items-center">
            <button
              type="button"
              className="flex items-center text-base font-bold"
              onClick={() => goBack()}
            >
              <IconChevronLeft size={28} stroke={1} />
              {
                switchs[type].name
              }
            </button>
          </div>
          <div className="ui_aspect-ratio-16/9" ref={DomVideoWrap}>
            <div className={classNames('ui_aspect-ratio-16/9', fixed ? ' absolute bottom-16 right-8 z-10 w-80' : 'relative')}>
              <DomVideo url={urls?.url} detail={detail} />
            </div>
          </div>
          <button type="button" onClick={() => handleDownload(urls?.url)}>下载</button>
          <div className="domVideoDetail_creator flex items-center mt-5">
            <Link to={`/user/${detail?.creator?.userId}`} className="avatar rounded-full overflow-hidden">
              <img className="" src={detail?.creator?.avatarUrl} alt="" />
            </Link>
            <Link className="nickname ml-2.5" to={`/user/${detail?.creator?.userId}`}>
              {detail?.creator?.nickname}
            </Link>
            <button
              onClick={handleFollow}
              type="button"
              className={classNames('follow text-red-500 bg-red-50 ml-auto h-8 rounded-full', { on: detail?.creator?.followed })}
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
            className="domVideoDetail_title h1 flex items-center mt-5"
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
          >
            {detail?.title}
            {
              descriptionVisibility
                ? <IconCaretUp size={24} className="fill-current" />
                : <IconCaretDown size={24} className="fill-current" />
            }
          </button>
          <div className="domVideoDetail_info text-gray-400 mt-4">
            发布：
            {dayjs(detail?.publishTime).format('YYYY-MM-DD')}
            &nbsp;
            播放
            {transPlayCount(detail?.playCount)}
          </div>
          <div className="domVideoDetail_group space-x-1">
            {detail?.videoGroup?.map((group) => (
              <Link className="group" to={`/video/list/${group.id}`} key={group.id}>
                {group.name}
              </Link>
            ))}
          </div>
          {
            descriptionVisibility
            && (
              <div
                className="domVideoDetail_description mt-4"
              >
                {detail.description}
              </div>
            )
          }
          <div className="domVideoDetail_actions flex space-x-3 mt-8">
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-4 hover:bg-gray-100"
            >
              <IconThumbUp size={20} stroke={1} />
              {
                detailInfo.liked
                  ? '已赞'
                  : '赞'
              }
              (
              {detailInfo.likedCount}
              )
            </button>
            {
              isSub ? (

                <button
                  type="button"
                  className="flex-center border h-8 rounded-full px-4 hover:bg-gray-100"
                  onClick={handleSub}
                >
                  <IconCheckbox size={20} stroke={1} />
                  已收藏
                  (
                  {detail[switchs[type].sub]}
                  )
                </button>
              )
                : (
                  <button
                    type="button"
                    className="flex-center border h-8 rounded-full px-4 hover:bg-gray-100"
                    onClick={handleSub}
                  >
                    <IconFolderPlus size={20} stroke={1} />
                    收藏
                    (
                    {detail[switchs[type].sub]}
                    )
                  </button>
                )
            }
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-4 hover:bg-gray-100"
            >
              <IconScreenShare size={20} stroke={1} />
              分享
              (
              {detailInfo.shareCount}
              )
            </button>
          </div>
          <div className="domVideoDetail_main mt-8">
            <div className="title mb-5">
              <span className="h1 font-bold">评论</span>
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
        <DomRelated related={related} />
      </div>
    </div>
  );
};
