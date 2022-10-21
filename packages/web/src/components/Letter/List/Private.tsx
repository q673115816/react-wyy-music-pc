import {
  useGetMsgPrivateQuery,
  useGetMsgRecentcontactQuery,
} from "@/modules/services/message";
import React, { memo } from "react";
import Empty from "./Empty";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Loading from "@/components/Loading";
import { setMsgPrivateHistory } from "@/modules/reducers/letter/slice";
import { useAppDispatch } from "@/modules/hooks";

const BuildList = {
  song: (msg) => (
    <span>
      单曲：「
      {msg.song.name}
      {msg.song.alias.length > 0 && (
        <span className="text-gray-400">
          {`（${msg.song.alias.join(",")}）`}
        </span>
      )}
      」
    </span>
  ),
  album: (msg) => <span>专辑：「{msg.album.name}」</span>,
  topic: (msg) => (
    <span>
      专栏文章：「
      {msg.topic.title}」
    </span>
  ),
  promotionUrl: (msg) => (
    <span>
      {msg.promotionUrl.text}
      ：「
      {msg.msg}」
    </span>
  ),
  picInfo: () => "[图片]",
};

const BuildTransLastMsg = (msg = {}) => {
  const keys = ["song", "album", "topic", "promotionUrl", "picInfo"];
  for (const key of keys) {
    if (msg[key]) return BuildList[key](msg);
  }
  return msg.msg;
};

const Private = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetMsgPrivateQuery({
    limit: 14,
  });
  const { msgs } = data || [];
  const handleSeeMsgPrivateHistory = async (uid: number, nickname: string) => {
    dispatch(
      setMsgPrivateHistory({
        uid,
        nickname,
        showMsgPrivateHistory: true,
      })
    );
  };

  if (isLoading) return <Loading />;
  if (msgs.length === 0) return <Empty active={"私信"} />;
  if (isSuccess)
    return msgs.map((item) => (
      <div
        className="item flex pr-4 pt-4 hover:bg-gray-100"
        key={item.fromUser.userId}
      >
        <div className="w-4 flex-center h-8">
          {item.newMsgCount > 0 && (
            <i className="rounded-full w-1.5 h-1.5 bg-red-500" />
          )}
        </div>
        <Link
          to={`/user/${item.fromUser.userId}`}
          className="avatar w-8 h-8 relative flex-none"
        >
          <img className="rounded-full" src={item.fromUser.avatarUrl} alt="" />
          <i className="ico absolute right-0 bottom-0 w-3.5 h-3.5">
            <img
              className="ui_containimg"
              src={item.fromUser.avatarDetail?.identityIconUrl}
              alt=""
            />
          </i>
        </Link>
        <button
          type="button"
          className="content border-b pb-3 flex-auto text-left ml-2.5 w-0"
          onClick={() =>
            handleSeeMsgPrivateHistory(
              item.fromUser.userId,
              item.fromUser.nickname
            )
          }
        >
          <div className="top flex">
            <span className="ui_link">{item.fromUser.nickname}</span>
            <span className="time ml-auto text-gray-400">
              {dayjs(item.lastMsgTime).format("YYYY年MM月DD日")}
            </span>
          </div>
          <div className="bottom truncate">
            {BuildTransLastMsg(JSON.parse(item.lastMsg))}
          </div>
        </button>
      </div>
    ));
  return null;
};

export default memo(Private);
