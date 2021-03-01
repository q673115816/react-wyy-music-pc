import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { IconThumbUp, IconScreenShare, IconMessageCircle } from '@tabler/icons';
import { transTextEmoji } from '@/common/faces';

export default ({ item = {}, handleLike }) => (
  <div className="ui_comment flex py-4 border-b group">
    <Link to={`/user/${item.user.userId}`} className="ui_comment_avatar w-10 h-10 flex-none relative">
      <img className="border rounded-full" src={item.user.avatarUrl} alt="" />
      {
        item.user?.avatarDetail?.identityIconUrl
        && (
        <img
          className="absolute right-0 bottom-0 w-3 h-3"
          src={item.user.avatarDetail.identityIconUrl}
          alt=""
        />
        )
      }
    </Link>
    <div className="ui_comment_content pl-4 flex-auto">
      <div className="ui_comment_comment">
        <Link className="ui_link" to={`/user/${item.user.userId}`}>
          {item.user.nickname}
          ：
        </Link>
        <span className="ui_comment_text select-text text-gray-500">
          {transTextEmoji(item.content)}
        </span>
      </div>
      {
          item.beReplied.map((beReplied) => (
            <div
              className="ui_comment_beReplied p-2 bg-gray-100 mt-2"
              key={beReplied.beRepliedCommentId}
            >
              {
                beReplied.content
                  ? (
                    <>
                      <Link
                        className="ui_link"
                        to={`/user/${beReplied.user.userId}`}
                      >
                        {beReplied.user.nickname}
                        ：
                      </Link>
                      <span className="ui_comment_text select-text text-gray-500">
                        {transTextEmoji(beReplied.content)}
                      </span>
                    </>
                  )
                  : <div className="text-center select-text text-gray-500">该评论已删除</div>
              }
            </div>
          ))
        }
      <div className="ui_comment_info mt-2.5 flex">
        <span className="ui_comment_time text-gray-400">
          {dayjs(item.time).format('YYYY年MM月DD日 HH:mm')}
        </span>
        <div className="ui_comment_actions ml-auto flex items-center">
          <div className="ui_comment_inform">
            <button type="button" className="opacity-0 group-hover:opacity-100 ui_text_black_hover">
              举报
            </button>
            <i className="ui_comment_split" />
          </div>
          <button
            type="button"
            className="flex-center ui_text_black_hover"
            onClick={() => handleLike(item.commentId, !item.liked)}
          >
            {item.liked
              ? <IconThumbUp size={16} stroke={0} fill="var(--themeColor)" />
              : <IconThumbUp size={16} stroke={1} />}
            {item.likedCount}
          </button>
          <i className="ui_comment_split" />
          <button type="button" className="flex-center ui_text_black_hover">
            <IconScreenShare size={16} stroke={1} />
          </button>
          <i className="ui_comment_split" />
          <button type="button" className="flex-center ui_text_black_hover">
            <IconMessageCircle size={16} stroke={1} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
