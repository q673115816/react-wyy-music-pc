import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  IconThumbUp,
  IconShare,
  IconMessage,
  IconDots,
  IconPlayerPlay,
  IconMoodSmile,
  IconAt,
  IconHash,
} from '@tabler/icons';
import { transTextEmoji } from '@/common/faces';

export default ({
  item = {}, handleGetComment, actThreadId,
}) => {
  const json = JSON.parse(item.json);
  const { comments } = useSelector(({ friend }) => friend);
  return (
    <div className="item py-5 flex">
      <Link to={`/user/${item.user.userId}`} className="avatar w-10 h-10">
        <img
          className="rounded-full"
          src={`${item.user.avatarUrl}?param=40y40`}
          alt=""
        />
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
          <span>分享单曲</span>
        </div>
        <div className="time mt-2">
          <span className="text-gray-400">
            {dayjs(item.eventTime).locale('zh-cn').format('MM月DD日 hh:mm')}
          </span>
        </div>
        <div className="article">
          <p className="text">
            {json.msg && transTextEmoji(json.msg)}
          </p>
          {json.song
            && (
              <button type="button" className="song bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5">
                <div className="cover relative overflow-hidden rounded">
                  <img
                    className="rounded w-10 h-10"
                    src={`${json.song.album.blurPicUrl}?param=40y40`}
                    alt=""
                  />
                  <div className="ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor">
                    <IconPlayerPlay size={14} className="fill-current" />
                  </div>
                </div>
                <div className="aside text-left px-3">
                  <div className="name">
                    {json
                      .song.name}
                  </div>
                  <div className="artist truncate mt-1">
                    {
                      json
                        .song
                        .artists
                        .map((artist, index) => (
                          <span className="text-gray-400" key={artist.name}>
                            {index > 0 && ' / '}
                            {artist.name}
                          </span>
                        ))
                    }
                  </div>
                </div>
              </button>
            )}
          {
            item.pics
            && (
              <div className="pic mt-2.5">
                {item.pics.map((pics) => (
                  <img src={pics.originUrl} key={pics.originUrl} alt="" />
                ))}
              </div>
            )
          }
          <div className="info">
            <div className="left text-gray-400">
              --
              {
                item?.rcmdInfo?.reason
              }
            </div>
            <div className="right ml-auto divide-x gap-x-2 flex">
              <button type="button" className="action flex-center">
                <IconThumbUp size={16} />
                &nbsp;
                {item.info.likedCount > 0 && (
                  <>
                    (
                    {item.info.likedCount}
                    )
                  </>
                )}
              </button>
              <button type="button" className="action flex-center">
                <IconShare size={16} />
                &nbsp;
                {item.info.shareCount > 0 && (
                  <>
                    (
                    {item.info.shareCount}
                    )
                  </>
                )}
              </button>
              <button type="button" className="action flex-center" onClick={() => handleGetComment(item.info.threadId)}>
                <IconMessage size={16} />
                &nbsp;
                {item.info.commentCount > 0 && (
                  <>
                    (
                    {item.info.commentCount}
                    )
                  </>
                )}
              </button>
              <button type="button" className="action flex-center">
                <IconDots size={16} />
              </button>
            </div>
          </div>
          {item.info.threadId === actThreadId
            && (
              <div className="comment">
                <div className="write">
                  <textarea />
                  <div className="help">
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
                    <div className="right">
                      <button className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full" type="button">
                        评论
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  最新评论(
                  {comments.length}
                  )
                </div>
                <ul>
                  {comments.slice(0, 10).map((comment) => (
                    <li className="" key={comment.commentId}>
                      <div className="avatar">
                        <img className="ui_containimg" src={comment.user.avatarUrl} alt="" />
                      </div>
                      <div className="commentContent">
                        <div>
                          {comment.content}
                        </div>
                        <div>
                          {dayjs(comment.time).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
