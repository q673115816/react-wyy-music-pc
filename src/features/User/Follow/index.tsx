import React, {
  useRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { apiUserDetail, apiUserFollows, apiFollow } from "@/api";
import { Link, useParams } from "react-router-dom";
import produce from "immer";

import { setPopupLetterToggle } from "@/modules/reducers/mask/slice";
import { setMsgPrivateHistory } from "@/modules/reducers/letter/slice";
import { useDispatch, useSelector } from "react-redux";
import DomLoading from "@/components/Loading";
import useInfinite from "@/hooks/useInfinite";
import DomCardList from "../components/CardList";

export default memo(() => {
  const { uid } = useParams();
  console.log("user_follow");
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [data, setData] = useState([]);
  const account = useSelector(({ account }) => account);
  const isSelf = useMemo(() => account.profile.userId === Number(uid), [uid]);
  const DomScroll = useRef();
  const DomObserver = useRef();
  const limit = 30;
  const offset = useRef(0);
  const hasMore = useRef(true);
  const handlePrveInit = async () => {
    try {
      const { profile } = await apiUserDetail({
        uid,
      });
      setProfile(profile);
    } catch (error) {
      console.log(error);
    }
  };

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
      setData(
        produce((draft) => {
          draft[draft.findIndex((item) => item.userId === id)].followed = true;
        })
      );
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

  useEffect(() => {
    handlePrveInit();
  }, []);
  useInfinite(handleAddData, DomScroll, DomObserver);
  return (
    <div className="domUser_followlist h-full overflow-auto" ref={DomScroll}>
      <div className="h1 domUser_subpage_header ui_header">
        <Link to="./">{profile.nickname}</Link>
        的关注
      </div>
      <div className="domUser_followlist_main">
        <DomCardList
          isSelf={isSelf}
          list={data}
          handleClick={handleClick}
          handleLetter={handleLetter}
        >
          <div className="empty">还没有关注</div>
        </DomCardList>
        <div ref={DomObserver} />
        {hasMore.current && (
          <div className="flex-center">
            <DomLoading />
          </div>
        )}
      </div>
    </div>
  );
});
