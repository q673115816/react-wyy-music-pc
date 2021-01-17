import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { IconThumbUp, IconScreenShare, IconMessageCircle } from '@tabler/icons';
import { transTextEmoji } from '@/common/faces';

export default ({ item = {}, handleLike }) => (
  <div className="ui_comment">
    <div className="ui_comment_avatar">
      <Link to={`/user/${item.user.userId}`}>
        <img className="ui_containimg" src={item.user.avatarUrl} alt="" />
      </Link>
    </div>
    <div className="ui_comment_content">
      <div className="ui_comment_comment">
        <Link className="ui_link" to={`/user/${item.user.userId}`}>
          {item.user.nickname}
          ：
        </Link>
        <span className="ui_comment_text">
          {transTextEmoji(item.content)}
        </span>
      </div>
      {
          item.beReplied.map((beReplied) => (
            <div
              className="ui_comment_beReplied"
              key={beReplied.beRepliedCommentId}
            >
              <Link
                className="ui_link"
                to={`/user/${beReplied.user.userId}`}
              >
                {beReplied.user.nickname}
                ：
              </Link>
              <span className="ui_comment_text">
                {transTextEmoji(beReplied.content)}
              </span>
            </div>
          ))
        }
      <div className="ui_comment_info">
        <span className="ui_comment_time ui_gray">
          {dayjs(item.time).format('YYYY-MM-DD')}
        </span>
        <div className="ui_comment_actions">
          <div className="ui_comment_inform">
            <button type="button" className="ui_hover">
              举报
            </button>
            <i className="ui_comment_split" />
          </div>
          <button
            type="button"
            className="flex-center ui_hover"
            onClick={() => handleLike(item.commentId, !item.liked)}
          >
            {item.liked
              ? <IconThumbUp size={16} stroke={0} fill="var(--basered)" />
              : <IconThumbUp size={16} stroke={1} />}
            {item.likedCount}
          </button>
          <i className="ui_comment_split" />
          <button type="button" className="flex-center ui_hover">
            <IconScreenShare size={16} stroke={1} />
          </button>
          <i className="ui_comment_split" />
          <button type="button" className="flex-center ui_hover">
            <IconMessageCircle size={16} stroke={1} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
