import React, { memo, useCallback, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DomCardList from "../components/CardList";
import { context } from "../context";
import {
  useGetUserFollowedsQuery,
  usePostFollowMutation,
} from "@/modules/services/user";

const Fans = () => {
  const { uid } = useParams();
  const { profile } = useContext(context);
  const [followPost] = usePostFollowMutation();
  const { data, isLoading } = useGetUserFollowedsQuery({
    uid: uid as string,
  });

  const followeds = data?.followeds || [];

  const handleClick = useCallback(
    async (id) => {
      try {
        const {} = await followPost({
          id,
          t: 1,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [uid]
  );

  return (
    <div className="domUser_followlist">
      <div className="h1 ui_header">
        <Link to="./">{profile.nickname}</Link>
        的粉丝
      </div>
      <div className="domUser_followlist_main">
        <DomCardList list={followeds} handleClick={handleClick}>
          <div className="empty">还没有粉丝</div>
        </DomCardList>
      </div>
    </div>
  );
};

export default memo(Fans);
