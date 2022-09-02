import React, { useRef, memo, useCallback, useMemo, useContext } from "react";
import { apiUserDetail, apiUserFollows, apiFollow } from "@/api";
import { Link, useParams } from "react-router-dom";

import { setPopupLetterToggle } from "@/modules/reducers/mask/slice";
import { setMsgPrivateHistory } from "@/modules/reducers/letter/slice";
import Loading from "@/components/Loading";
import useInfinite from "@/hooks/useInfinite";
import CardList from "../components/CardList";
import { useImmer } from "use-immer";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { useGetUserDetailQuery } from "@/modules/services/user";
import { context } from "../context";
import { accountSelector } from "@/modules/reducers/account/slice";

const limit = 30;

const Follow = () => {
  const { profile } = useContext(context);
  const { uid } = useParams();
  const dispatch = useAppDispatch();
  const [data, setData] = useImmer([]);
  const account = useAppSelector(accountSelector);
  const isSelf = useMemo(() => account.profile.userId === Number(uid), [uid]);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const offset = useRef(0);
  const hasMore = useRef(true);

  const handleAddData = async () => {
    if (!hasMore.current) return;
    try {
      const { follow, more } = await apiUserFollows({
        uid,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      hasMore.current = more;
      setData((prev) => [...prev, ...follow]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = useCallback(async (id) => {
    try {
      const {} = await apiFollow({
        id,
        t: 1,
      });
      setData((draft) => {
        draft[draft.findIndex((item) => item.userId === id)].followed = true;
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLetter = (uid, nickname) => {
    dispatch(setPopupLetterToggle());
    dispatch(
      setMsgPrivateHistory({
        uid,
        nickname,
        showMsgPrivateHistory: true,
      })
    );
  };

  useInfinite(handleAddData, DomScroll, DomObserver);

  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="h1 ui_header">
        <Link to="./">{profile?.nickname}</Link>
        的关注
      </div>
      <div className="">
        <CardList
          isSelf={isSelf}
          list={data}
          handleClick={handleClick}
          handleLetter={handleLetter}
        >
          <div className="empty">还没有关注</div>
        </CardList>
        <div ref={DomObserver} />
        {hasMore.current && (
          <div className="flex-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Follow);
