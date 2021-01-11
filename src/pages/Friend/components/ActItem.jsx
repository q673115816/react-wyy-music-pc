import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  IconThumbUp, IconShare, IconMessage, IconDots,
} from '@tabler/icons';
import { transTextEmoji } from '@/common/faces';

export default ({
  item = {}, handleGetComment, actThreadId,
}) => {
  const json = JSON.parse(item.json);
  const { comments } = useSelector(({ friend }) => friend);
  return (
    <div className="item" key={item.id}>
      <Link to={`/user/${item.user.userId}`} className="avatar">
        <img
          className="ui_containimg"
          src={`${item.user.avatarUrl}?param=100y100`}
          alt=""
        />
      </Link>
      <div className="content">
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
        <div className="time">
          <span className="ui_gray">
            {dayjs(item.eventTime).locale('zh-cn').format('MM月DD日 hh:mm')}
          </span>
        </div>
        <div className="article">
          <p className="text">
            {json.msg && transTextEmoji(json.msg)}
          </p>
          {json.song
            && (
              <button type="button" className="song">
                <div className="img">
                  <img
                    className="ui_containimg"
                    src={json.song.img80x80}
                    alt=""
                  />
                </div>
                <div className="aside">
                  <div className="name">
                    {json
                      .song.name}
                  </div>
                  <div className="artist text-overflow">
                    {
                      json
                        .song
                        .artists
                        .map((artist) => (
                          <span className="ui_gray" key={artist.name}>{artist.name}</span>
                        ))
                    }
                  </div>
                </div>
              </button>
            )}
          {
            item.pics
            && (
              <div className="pic">
                {item.pics.map((pics) => (
                  <img src={pics.originUrl} alt="" />
                ))}
              </div>
            )
          }
          <div className="info">
            <div className="left ui_gray">
              --
              {
                item?.rcmdInfo?.reason
              }
            </div>
            <div className="right">
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
              <i className="vert" />
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
              <i className="vert" />
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
              <i className="vert" />
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
                    <div className="left">
                      <button type="button">
                        <i className="material-icons">sentiment_satisfied_alt</i>
                      </button>
                      <button type="button">
                        <i className="material-icons">alternate_email</i>
                      </button>
                      <button type="button">
                        <i className="material-icons">title</i>
                      </button>
                    </div>
                    <div className="right">
                      <button className="ui_btn" type="button">
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
