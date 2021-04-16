import React, {
  useEffect, useMemo, useState, useRef, useCallback,
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
  IconDownload,
} from '@tabler/icons';
import './style.scss';

import { transPlayCount } from '@/common/utils';
import { setAudioRunningPause } from '@/reducers/audio/actions';

import {
  apiFollow,
  apiVideoSub,
  apiMVSub,
  apiMVSublist,
  apiCommentVideo,
  apiCommentMV,
  apiResourceLike,
} from '@/api';
import { setToast, setDialogDownloadVideoShow } from '@/reducers/mask/actions';
import { setMVSublist } from '@/reducers/account/actions';
import { setVideoListId } from '@/reducers/videolist/actions';
import Write from '@/components/Write';

import { useDispatch, useSelector } from 'react-redux';
import DomCommentsList from '@/components/CommentsList';
import DomPage from '@/components/Page';
import { commentLimit as limit } from '@/common/config';
import DomLoading from '@/components/Loading';
import DialogDownloadVideo from '@/components/Dialog/DownloadVideo';
import produce from 'immer';
import UseVideoInit from './UseVideoInit';
import UseMVInit from './UseMVInit';
import DomRelated from './Related';
import DomVideo from './components/Video';

const switchs = {
  video: {
    init: UseVideoInit,
    name: '视频详情',
    sub: 'subscribeCount',
    apiComments: apiCommentVideo,
  },
  mv: {
    init: UseMVInit,
    name: 'MV详情',
    sub: 'subCount',
    apiComments: apiCommentMV,
  },
};

const DomGroup = ({ list = [], func }) => (
  <div className="domVideoDetail_group mt-3 space-x-1">
    {list.map((group) => (
      <Link
        className="group bg-gray-50 rounded-full px-2 py-1"
        onClick={() => func(group.id)}
        to="/video/list"
        key={group.id}
      >
        {group.name}
      </Link>
    ))}
  </div>
);

export default () => {
  // console.log('player');
  const { vid, type } = useParams();
  if (!['video', 'mv'].includes(type) || !vid) {
    return <Redirect to="/" />;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAudioRunningPause());
  }, []);
  const { mvSublist } = useSelector(({ account }) => account);
  // const currentInit = type === 'video' ? UseVideoInit : UseMVInit;
  const {
    pending,
    urls,
    related,
    detail,
    detailInfo,
    handleInit,
  } = switchs[type].init();

  const DomVideoWrap = useRef();
  const DomScroll = useRef();
  const Io = useRef();
  const [fixed, setFixed] = useState(false);

  const { goBack } = useHistory();
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [value, setValue] = useState('');
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const isSub = useMemo(() => mvSublist.find((mv) => mv.vid === vid), [vid, mvSublist]);
  const isLike = useMemo(() => null, [vid]);
  const [downloadState, setDownloadState] = useState({
    state: '下载',
    process: 0,
  });
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

  const handleLike = () => {
    dispatch(apiResourceLike({
      id: vid,
      type: type === 'mv' ? '1' : '5',
      t: isLike ? 0 : 1,
    }));
  };

  const callback = () => {
    setDownloadState(produce((draft) => {
      draft.state = '缓存中';
    }));
    const send = new XMLHttpRequest();
    send.open('GET', urls?.url);

    // send.setRequestHeader('Content-Type', 'blob');
    send.responseType = 'blob';
    send.addEventListener('progress', ({ loaded, total }) => {
      console.log('progress', `${loaded / total * 100}%`);
      setDownloadState(produce((draft) => {
        draft.process = loaded / total;
      }));
    });
    send.addEventListener('readystatechange', (e) => {
      // console.log(e);
      if (send.readyState !== 4) return;
      // console.log('finish', send.response);
      setDownloadState(produce((draft) => {
        draft.state = '已缓存';
      }));
      const { pathname } = new URL(urls?.url);
      const ext = pathname.substr(pathname.lastIndexOf('.'));
      const url = window.URL.createObjectURL(send.response);
      // console.log(url);
      const a = document.createElement('a');
      a.download = `${detail?.title}.${ext}`;
      a.href = url;
      a.click();
      window.URL.revokeObjectURL(url);
    });
    send.send();
    // fetch(urls?.url)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const { pathname } = new URL(urls?.url);
    //     const ext = pathname.substr(pathname.lastIndexOf('.'));
    //     const url = window.URL.createObjectURL(blob);
    //     // console.log(url);
    //     const a = document.createElement('a');
    //     a.download = `${detail?.title}.${ext}`;
    //     a.href = url;
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   });
  };

  const handleDownload = () => {
    if (downloadState.state !== '下载') return;
    dispatch(setDialogDownloadVideoShow({
      callback,
    }));
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
      dispatch(setToast(isSub ? '取消收藏成功' : '收藏成功'));
    } catch (error) {
      console.log(error);
    }
  };

  const handleComments = async () => {
    try {
      const comments = await switchs[type].apiComments({
        id: vid,
        limit,
        offset: (page - 1) * limit,
      });
      setComments(comments);
      if (commentsLoading) {
        setCommentsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CallBackSetVideoListCategrayId = useCallback((id) => dispatch((setVideoListId({ id }))), [vid]);

  useEffect(() => {
    handleInit(vid);
    handleComments();
  }, [vid]);

  useEffect(() => {
    handleComments();
  }, [page]);

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
            <DomVideo url={urls?.url} detail={detail} fixed={fixed} />
          </div>
          <div className="domVideoDetail_creator flex items-center mt-5">
            <Link to={`/user/${detail?.creator?.userId}`} className="avatar rounded-full overflow-hidden border">
              <img className="" src={detail?.creator?.avatarUrl} alt="" />
            </Link>
            <Link className="nickname ml-2.5" to={`/user/${detail?.creator?.userId}`}>
              {detail?.creator?.nickname}
            </Link>
            {
              type === 'video'
              && (
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
              )
            }
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
          <div className="domVideoDetail_info text-gray-300 mt-3">
            发布：
            {dayjs(detail?.publishTime).format('YYYY-MM-DD')}
            &nbsp;
            播放
            {transPlayCount(detail?.playCount)}
          </div>
          <DomGroup list={detail?.videoGroup} func={CallBackSetVideoListCategrayId} />
          {
            descriptionVisibility
            && (
              <div className="domVideoDetail_description mt-4">
                {detail.description}
              </div>
            )
          }
          <div className="domVideoDetail_actions flex space-x-3 mt-8">
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
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
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
              onClick={handleSub}
            >
              {isSub
                ? <IconCheckbox size={20} stroke={1} />
                : <IconFolderPlus size={20} stroke={1} />}
              {
                isSub ? '已收藏' : '收藏'
              }
              (
              {detail[switchs[type].sub]}
              )
            </button>
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
            >
              <IconScreenShare size={20} stroke={1} />
              分享
              {`(${detailInfo.shareCount})`}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className={classNames('relative w-24 h-8 rounded-full overflow-hidden', downloadState.process === 0 ? ' border' : '')}
            >
              <div className="absolute inset-0 flex justify-end overflow-hidden">
                <span className="w-24 h-8 flex-center bg-white">
                  <IconDownload size={20} stroke={1} />
                  {downloadState.state}
                </span>
              </div>
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ right: `${(1 - downloadState.process) * 100}%` }}>
                <span className="w-24 h-8 flex-center ui_theme_bg_color text-white">
                  <IconDownload size={20} stroke={1} />
                  {downloadState.state}
                </span>
              </div>
            </button>
            <DialogDownloadVideo />
          </div>
          <div className="domVideoDetail_main mt-8">
            <div className="title mb-5">
              <Link to={`/comment/${type}/${vid}`} className="h1 font-bold">评论</Link>
                  &nbsp;
              <span>
                {`(${detail.commentCount})`}
              </span>
            </div>
            <div className="domVideoDetail_feedback mb-10">
              <Write {...{
                value,
                setValue,
                length: 140,
              }}
              />
            </div>
            {commentsLoading ? (
              <div className="">
                <DomLoading />
              </div>
            ) : (
              <>
                <DomCommentsList comments={comments} />
                <DomPage total={Math.ceil(comments.total / limit)} page={page} func={setPage} />
              </>
            )}
          </div>
        </div>
        <DomRelated related={related} />
      </div>
    </div>
  );
};
