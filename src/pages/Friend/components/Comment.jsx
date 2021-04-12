import React, { memo } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { transTextEmoji } from '@/common/faces';

export default memo(({ comment }) => (
  <div className="flex py-4 px-3" key={comment.commentId}>
    <Link to={`/user/${comment.user.userId}`} className="avatar w-10 h-10 rounded-full border flex-none">
      <img className="rounded-full w-full h-full" src={`${comment.user.avatarUrl}?param=40y40`} alt="" />
    </Link>
    <div className="commentContent pl-3 select-text">
      <div className="">
        <Link to={`/user/${comment.user.userId}`} className="ui_link">
          {`${comment.user.nickname}：`}
        </Link>
        {transTextEmoji(comment.content)}
      </div>
      {comment.beReplied.length > 0
        && (
          <div className="bg-white p-2.5 mt-2.5">
            <Link to={`/user/${comment.beReplied[0].user.userId}`} className="ui_link">
              {comment.beReplied[0].user.nickname}
              ：
            </Link>
            {transTextEmoji(comment.beReplied[0].content)}
          </div>
        )}
      <div className="mt-2">
        <span className="text-gray-300">
          {dayjs(comment.time).format('YYYY年MM月DD日 HH:mm:ss')}
        </span>
      </div>
    </div>
  </div>
));
