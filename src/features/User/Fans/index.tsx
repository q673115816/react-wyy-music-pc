import React, { memo, useCallback, useEffect, useState } from "react";
import { apiUserDetail, apiUserFolloweds, apiFollow } from "@/api";
import { Link, useParams } from "react-router-dom";
import produce from "immer";
import DomCardList from "../components/CardList";

export default memo(() => {
  const { uid } = useParams();
  console.log("user_fans");
  const [profile, setProfile] = useState({});
  const [data, setData] = useState([]);

  const handleInit = async () => {
    try {
      const [{ profile }, { followeds }] = await Promise.all([
        apiUserDetail({
          uid,
        }),
        apiUserFolloweds({
          uid,
        }),
      ]);
      setProfile(profile);
      setData(followeds);
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

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domUser_followlist">
      <div className="h1 domUser_subpage_header ui_header">
        <Link to="./">{profile.nickname}</Link>
        的粉丝
      </div>
      <div className="domUser_followlist_main">
        <DomCardList list={data} handleClick={handleClick}>
          <div className="empty">还没有粉丝</div>
        </DomCardList>
      </div>
    </div>
  );
});
