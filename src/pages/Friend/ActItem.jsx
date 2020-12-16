import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({
  item = {}, handleGetComment, actThreadId,
}) => {
  const json = JSON.parse(item.json);
  const { comments } = useSelector(({ friend }) => friend);
  return (
    <div className="item" key={item.id}>
      <div className="avator">
        <img
          className="ui_containimg"
          src={`${item.user.avatarUrl}?param=100y100`}
          alt=""
        />
      </div>
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
          <span className="gray">
            {dayjs(item.eventTime).locale('zh-cn').format('MM月DD日 hh:mm')}
          </span>
        </div>
        <div className="article">
          <p className="text">
            {json.msg}
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
                          <span className="gray">{artist.name}</span>
                        ))
                    }
                  </div>
                </div>
              </button>
            )}
          <div className="info">
            <div className="right">
              <button type="button" className="action">
                <i className="material-icons">thumb_up</i>
                &nbsp;
                <span>
                  (
                  {item.info.likedCount}
                  )
                </span>
              </button>
              <i className="vert" />
              <button type="button" className="action">
                <i className="material-icons">share</i>
              </button>
              <i className="vert" />
              <button type="button" className="action" onClick={() => handleGetComment(item.info.threadId)}>
                <i className="material-icons">chat</i>
                &nbsp;
                <span>{item.info.commentCount}</span>
              </button>
              <i className="vert" />
              <button type="button" className="action">
                <i className="material-icons">more_horiz</i>
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
              {comments.slice(0, 10).map((item) => (
                <li>
                  <div className="avatar">
                    <img className="ui_containimg" src={item.user.avatarUrl} alt="" />
                  </div>
                  <div className="commentContent">
                    <div>
                      {item.content}
                    </div>
                    <div>
                      {dayjs(item.time).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')}
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
