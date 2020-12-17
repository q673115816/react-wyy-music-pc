import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const CommentItem = ({ item = {} }) => (
  <div className="item">
    <div className="avatar">
      <Link to={`/user/${item.user.userId}`}>
        <img className="ui_containimg" src={item.user.avatarUrl} alt="" />
      </Link>
    </div>
    <div className="content">
      <div className="comment">
        <Link className="ui_link" to={`/user/${item.user.userId}`}>
          {item.user.nickname}
          ：
        </Link>
        <span className="text">
          {item.content}
        </span>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thumb-up" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
            </svg>
            {item.likedCount}
          </button>
          <span />
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-screen-share" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
              <line x1="7" y1="20" x2="17" y2="20" />
              <line x1="9" y1="16" x2="9" y2="20" />
              <line x1="15" y1="16" x2="15" y2="20" />
              <path d="M17 4h4v4" />
              <path d="M16 9l5 -5" />
            </svg>
          </button>
          <span />
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
              <line x1="12" y1="12" x2="12" y2="12.01" />
              <line x1="8" y1="12" x2="8" y2="12.01" />
              <line x1="16" y1="12" x2="16" y2="12.01" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ({ comments = {} }) => (
  <div className="domVideoDetail_comments">

    <div className="subtitle"><b>精彩评论</b></div>
    <div className="comments">
      {
        comments?.hotComments?.map((item) => (
          <CommentItem item={item} key={item.commentId} />
        ))
      }
    </div>
    <div className="subtitle">
      <b>
        最新评论
        (
        {comments.total}
        )
      </b>

    </div>
    <div className="comments">
      {
        comments?.comments?.map((item) => (
          <CommentItem item={item} key={item.commentId} />
        ))
      }
    </div>

  </div>
);
