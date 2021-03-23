import React from 'react';
import DomComment from './Comment';

export default ({ comments = {} }) => (
  <div className="">
    <div className="mb-10">
      <div className="subtitle font-bold">精彩评论</div>
      <div className="comments divide-y">
        {
          comments?.hotComments?.map((item) => (
            <DomComment item={item} key={item.commentId} />
          ))
        }
      </div>
    </div>
    <div>
      <div className="subtitle font-bold">
        最新评论
        (
        {comments.total}
        )
      </div>
      <div className="comments divide-y">
        {
          comments?.comments?.map((item) => (
            <DomComment item={item} key={item.commentId} />
          ))
        }
      </div>
    </div>

  </div>
);
