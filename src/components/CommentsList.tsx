import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import DomComment from './Comment';

export default memo(({ comments = { }, more, type }) => (
  <div className="">
    {
      comments.hotComments?.length > 0
      && (
      <div className="mb-10">
        <div className="subtitle font-bold">精彩评论</div>
        <div className="comments divide-y">
          {
            comments?.hotComments?.slice(0, 10).map((item) => (
              <DomComment item={item} key={item.commentId} />
            ))
          }
        </div>
        {
          more && comments?.hotComments?.length > 10
          && (
            <div className="domComment_list_more flex-center">
              <Link
                className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
                to={`/comment/${type}/${more}/hot`}
              >
                更多精彩评论 &gt;

              </Link>
            </div>
          )
        }
      </div>
      )
    }
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
));
