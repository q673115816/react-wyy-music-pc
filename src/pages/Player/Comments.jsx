import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import DomComment from '@/components/Comment';

export default ({ comments = {} }) => (
  <div className="domVideoDetail_comments">

    <div className="subtitle"><b>精彩评论</b></div>
    <div className="comments">
      {
        comments?.hotComments?.map((item) => (
          <DomComment item={item} key={item.commentId} />
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
          <DomComment item={item} key={item.commentId} />
        ))
      }
    </div>

  </div>
);
