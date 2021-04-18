import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons';

const BuildAction = ({
  handleLetter, handleClick, isSelf, id, name, followed,
}) => {
  switch (true) {
    case handleLetter && isSelf:
      return (
        <button
          onClick={() => handleLetter(id, name)}
          type="button"
          className="follow border flex-center rounded-full w-16 h-6 hover:bg-gray-200"
        >
          <IconPlus size={16} className="text-red-500" />
                            &nbsp;私信
        </button>
      );
    case followed:
      return (
        <span className="follow border text-gray-500 flex-center rounded-full w-16 h-6">
          已关注
        </span>
      );
    default:
      return (
        <button
          onClick={() => handleClick(id)}
          type="button"
          className="follow border flex-center rounded-full w-16 h-6 hover:bg-gray-200"
        >
          <IconPlus size={16} className="text-red-500" />
                            &nbsp;关注
        </button>
      );
      break;
  }
};

export default memo(({
  item, handleClick, handleLetter, isSelf,
}) => (
  <div className="item w-96 flex p-4 hover:bg-gray-50" key={item.userId}>
    <Link to={`/user/${item.userId}`} className="relative avatar rounded-full border flex-none">
      <img className="rounded-full" src={`${item.avatarUrl}?param=90y90`} alt="" />
      {
        item.avatarDetail
        && (
          <div className="ico w-6 h-6 absolute right-0 bottom-0">
            <img src={item.avatarDetail.identityIconUrl} alt="" />
          </div>
        )
      }
    </Link>
    <div className="content flex-auto w-0 pl-2">
      <div className="contain mt-4">
        <div className="left">
          <Link
            className="nickname ui_text_black_hover truncate pr-3 w-56"
            to={`/user/${item.userId}`}
          >
            {item.nickname}
          </Link>
        </div>
      </div>
      <div className="contain flex items-baseline">
        <div className="truncate pr-3 text-gray-500 w-56">{item.signature}</div>
        <div className="right flex-none">
          {
            BuildAction({
              handleLetter,
              handleClick,
              isSelf,
              followed: item.followed,
              id: item.userId,
              name: item.nickname,
            })
          }
        </div>
      </div>
      <div className="info divide-x text-gray-500 mt-1">
        <span className="pr-6">
          {` 歌单：${item.playlistCount}`}
        </span>
        <span className="pl-6">
          {`粉丝：${item.followeds}`}
        </span>
      </div>
    </div>
  </div>
));
