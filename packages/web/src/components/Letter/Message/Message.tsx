import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { apiSendText, apiMsgPrivateHistory } from "@/api";
import {
  letterSelector,
  setMsgPrivateHistory,
} from "@/modules/reducers/letter/slice";
import { wordLength } from "@/components/editor";
import { IconChevronLeft } from "@tabler/icons";
import Emoji from "@/components/Emoji";
import { ImageSender, EmojiSender, Textarea } from "@/components/editor";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import Song from "./Song";
import Album from "./Album";
import Circle from "./Circle";
import Promotion from "./Promotion";
import Image from "./Image";
import style from "./Message.module.scss";
import classNames from "classnames";
import { useToast } from "@/components/Toast";
import Parse from "@/components/Comments/Parse";
import { accountSelector } from "@/modules/reducers/account/slice";

const Content = ({ msg = {} }) => {
  const { type } = msg;
  if (type === 16) return <Image msg={msg} />;
  return (
    <>
      <Parse text={msg.msg} />
      {type === 1 && <Song msg={msg} />}
      {type === 2 && <Album msg={msg} />}
    </>
  );
};

const MsgLeft = ({ msg = {} }) => (
  <div className="flex">
    <div className="w-60 flex">
      <div className="rounded-lg rounded-tl-none bg-gray-100 p-3 select-text">
        <Content msg={msg} />
      </div>
    </div>
  </div>
);

const MsgRight = ({ msg = {} }) => (
  <div className="flex">
    <div className="ml-auto w-60 flex">
      <div className="ml-auto rounded-lg rounded-br-none bg-blue-50 p-3 select-text">
        <Content msg={msg} />
      </div>
    </div>
  </div>
);

const Message = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const history = useRef(null);

  const { uid, hint, nickname, privatMsgs } = useAppSelector(letterSelector);

  const { profile } = useAppSelector(accountSelector);

  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState("");
  // const [privatMsgs, setPrivateMsgs] = useState([]);
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleCheck = (face) => {
    setValue(value + face);
  };

  const handleGetMsgPrivateHistory = async () => {
    try {
      const { hint, msgs = [] } = await apiMsgPrivateHistory({ uid });
      // setPrivateMsgs(msgs.reverse());
      dispatch(
        setMsgPrivateHistory({
          hint,
          privatMsgs: msgs.reverse(),
        })
      );
      history.current.scrollTo(0, history.current.scrollHeight);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    try {
      const {
        newMsgs = [],
        code,
        message,
      } = await apiSendText({
        user_ids: uid,
        msg: value,
      });
      if (code === 2201) {
        toast(message);
        return;
      }
      dispatch(
        setMsgPrivateHistory({
          privatMsgs: newMsgs.reverse(),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const length = wordLength(value);
    if (length <= 200) {
      await handleSend();
      setValue("");
    } else {
      console.log("to long");
    }
  };

  useEffect(() => {
    handleGetMsgPrivateHistory();
  }, [uid]);

  return (
    <>
      <div
        className="relative text-center text-sm flex-center"
        style={{ height: 50 }}
      >
        <button
          type="button"
          className="back absolute inset-y-0 left-0 p-2.5 flex-center ui_text_gray_hover"
          onClick={() =>
            dispatch(setMsgPrivateHistory({ showMsgPrivateHistory: false }))
          }
        >
          <IconChevronLeft size={22} />
        </button>
        <span>{nickname}</span>
      </div>
      <div
        className="flex-1 overflow-auto max-h-full flex-auto px-5"
        ref={history}
      >
        {privatMsgs.map((item) => (
          <div className="item mt-5" key={item.id}>
            <div className={classNames(style.time, "text-gray-400")}>
              {dayjs(item.time).format("YYYY年MM月DD日 HH:mm")}
            </div>
            {item.toUser.userId === profile.userId ? (
              <div className="msg flex justify-start">
                <div className="avatar flex-none mr-4 rounded-full overflow-hidden w-8 h-8">
                  <img className="" src={item.fromUser.avatarUrl} alt="" />
                </div>
                <MsgLeft msg={JSON.parse(item.msg)} />
              </div>
            ) : (
              <MsgRight msg={JSON.parse(item.msg)} />
            )}
          </div>
        ))}
        {hint && <div className={style.hint}>{hint}</div>}
      </div>
      <div className="feedback p-3">
        <Textarea
          placeholder={`回复 ${nickname}`}
          max={200}
          onChange={handleChange}
        />
        <div className="actions flex mt-2.5">
          <div className="left relative">
            {visibility && (
              <div className="-translate-x-3 -translate-y-1/2 absolute faces right-full top-1/2 transform">
                <Emoji
                  handleHide={() => setVisibility(false)}
                  handleCheck={handleCheck}
                />
              </div>
            )}
            <EmojiSender onClick={() => setVisibility(!visibility)} />
            <ImageSender />
          </div>
          <button
            type="button"
            className="ml-auto border px-4 h-8 rounded-full"
            onClick={handleSubmit}
          >
            发送
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Message);
