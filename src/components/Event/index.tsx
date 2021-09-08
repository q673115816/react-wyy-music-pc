import React, { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import {
  IconThumbUp,
  IconShare,
  IconMessage,
  IconDots,
  IconPlayerPlay,
} from '@tabler/icons';
import { apiCommentEvent } from '@/api';
import { transTextEmoji } from '@/common/faces';
import classNames from 'classnames';
import DomComment from './Comment';
import DomTextarea from './Textarea';
import './style.scss';

const types = {
  18: '分享单曲',
  36: '分享歌手',
};

const DomResource = ({ item }) => {
  if (!item) return null;
  return (
    <Link to={`/artist/${item.id}`} className="mt-2 flex items-center p-2 h-14 rounded bg-gray-100 hover:bg-gray-200">
      <div className="w-10 h-10 rounded">
        <img src={item.img80x80} className="rounded w-full h-full object-cover" alt="" />
      </div>
      <div className="px-3">{`歌手：${item.name}`}</div>
    </Link>
  );
};

const DomSong = ({ item }) => {
  if (!item) return null;
  return (
    <button type="button" className="song bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5">
      <div className="cover relative overflow-hidden rounded flex-none">
        <img
          className="rounded w-10 h-10"
          src={`${item.album.blurPicUrl}?param=40y40`}
          alt=""
        />
        <div className="ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor">
          <IconPlayerPlay size={14} className="fill-current" />
        </div>
      </div>
      <div className="aside text-left px-3 w-0 flex-auto">
        <div className="name">
          {item.name}
        </div>
        <div className="artist truncate mt-1 text-gray-400">
          {item.artists.map(({ name }) => name).join(' / ')}
        </div>
      </div>
    </button>
  );
};

const DomPics = ({ item }) => {
  if (!item) return null;
  let len = item.length;
  if (len === 1) {
    return (
      <div className="pics grid gap-1 mt-2.5 pic_1">
        <div className="img">
          <img src={item[0].originUrl} className="max-h-full max-w-full object-cover rounded-lg" alt="" />
        </div>
      </div>
    );
  }
  if (len === 8) len = 'even';
  else len = 3;
  return (
    <div className={classNames('pics grid gap-1 mt-2.5', `pic_${len}`)}>
      {item.map((pic) => (
        <div key={pic.originUrl} className="img relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img loading={`lazy`} src={pic.originUrl} className="w-full object-cover h-full ui_aspect-ratio-1/1" alt="" />
          </div>
          {pic.width / pic.height < 0.75
            && <div className="absolute bottom-0 right-0 mx-1 my-2 border leading-tight bg-black bg-opacity-20 text-white border-current px-1 rounded-full">长图</div>}
        </div>
      ))}
    </div>
  );
};

export default memo(({
  item = {}, commentIsShow, handleToggleComment,
}) => {
  // console.log('event');
  const json = JSON.parse(item.json);
  const [comments, setComments] = useState([]);
  const [hotComments, setHotComments] = useState([]);
  // console.log(json);
  // const { comments, hotComments } = useSelector(({ friend }) => friend);
  const handleGetComment = async (threadId) => {
    try {
      const { comments, hotComments } = await apiCommentEvent({
        threadId,
      });
      setComments(comments);
      setHotComments(hotComments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (commentIsShow) {
      handleGetComment(item.info.threadId);
    }
  }, [commentIsShow]);
  if (item.type === 33) {
    // console.log(json);
    return (
      <div className="py-5 px-12">
        <div className="relative rounded-xl overflow-hidden">
          <img src={json.coverPCUrl} alt="" />
          <div className="absolute border-b border-opacity-20 border-t border-white flex-center h-20 inset-0 m-auto text-center text-white w-min whitespace-nowrap">
            <div className="text-xl">
              {`#${json.title}#`}
            </div>
            <div className="-translate-y-1/2 absolute top-full transform">
              {`${json.participateCount}参与`}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="ui_event_item py-5 flex">
      <Link
        to={`/user/${item.user.userId}`}
        className="avatar flex-none w-10 h-10 relative border rounded-full"
      >
        <img
          className="rounded-full"
          src={`${item.user.avatarUrl}?param=40y40`}
          alt=""
        />
        {
          item?.user?.avatarDetail?.identityIconUrl
          && (
          <img
            className="absolute bottom-0 right-0 w-3.5 h-3.5"
            src={item.user.avatarDetail.identityIconUrl}
            alt=""
          />
          )
        }
      </Link>
      <div className="content ml-2.5 flex-auto">
        <div className="name">
          <Link
            className="ui_link"
            to={`/user/${item.user.userId}`}
          >
            {item.user.nickname}
          </Link>
          &nbsp;
          <span className="text-gray-500">
            {types[item.type]}
          </span>
        </div>
        <div className="time mt-2">
          <Link to={`/comment/event/${item.id}`} className="ui_text_gray_hover">
            {dayjs(item.showTime).format('MM月DD日 HH:mm')}
          </Link>
        </div>
        <div className="article">
          <div className="text whitespace-pre-line text-sm mt-2.5">
            {json.msg && transTextEmoji(json.msg)}
          </div>
          <DomResource item={json.resource} />
          <DomSong item={json.song} />
          <DomPics item={item.pics} />
          <div className="info flex mt-2.5">
            <div className="left text-gray-400">
              {item?.rcmdInfo?.reason && `--${item.rcmdInfo.reason}`}
            </div>
            <div className="right ml-auto divide-x flex">
              <div className="px-3">
                <button type="button" className="action ui_text_gray_hover flex-center">
                  <IconThumbUp size={16} />
                  {item.info.likedCount > 0 && `(${item.info.likedCount})`}
                </button>
              </div>
              <div className="px-3">
                <button type="button" className="action ui_text_gray_hover flex-center">
                  <IconShare size={16} />
                  &nbsp;
                  {item.info.shareCount > 0 && `(${item.info.shareCount})`}
                </button>
              </div>
              <div className="px-3">
                <button
                  type="button"
                  className="action ui_text_gray_hover flex-center"
                  onClick={() => handleToggleComment(item.info.threadId)}
                >
                  <IconMessage size={16} />
                  &nbsp;
                  {item.info.commentCount > 0 && `(${item.info.commentCount})`}
                </button>
              </div>
              <div className="px-3">
                <button type="button" className="action ui_text_gray_hover flex-center">
                  <IconDots size={16} />
                </button>
              </div>
            </div>
          </div>
          {commentIsShow
            && (
              <div className="comment bg-gray-100 mt-3 rounded">
                <div className="p-3">
                  <DomTextarea />
                </div>
                {hotComments.length > 0 && (
                  <>
                    <div className="text-sm px-3 text-gray-500 font-bold">
                      精彩评论
                    </div>
                    <div className="divide-y">
                      {hotComments.slice(0, 10).map((comment) => (
                        <DomComment key={comment.commentId} comment={comment} />
                      ))}
                    </div>
                  </>
                )}
                {
                  comments.length > 0 ? (
                    <>
                      <div className="text-sm px-3 text-gray-500 font-bold">
                        最新评论
                        {`(${comments.length})`}
                      </div>
                      <div className="divide-y">
                        {comments.slice(0, 10).map((comment) => (
                          <DomComment key={comment.commentId} comment={comment} />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex-center py-10 text-gray-500">
                      还没有评论哦，快来抢沙发~
                    </div>
                  )
                }
              </div>
            )}
        </div>
      </div>
    </div>
  );
});
