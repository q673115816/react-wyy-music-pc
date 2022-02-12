import React, { useState, useEffect, useRef, memo } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import "./style.scss";
import {
  setTopPlaylist,
  setPlaylistCatlist,
} from "@/modules/reducers/home/slice";
import Loading from "@/components/Loading";
import Banner from "./components/Banner";
import HeaderBar from "./components/HeaderBar";
import {useGetTopPlaylistHighqualityMutation} from "@/modules/services/discover";

export default memo(function Playlist() {
  const { cat = '', page = '' } = useParams();
  const [highquality, setHighquality] = useState({});
  const [highqualityGet, {isLoading}] = useGetTopPlaylistHighqualityMutation()
  console.log('page', page)
  useEffect(() => {
    (async () => {
      const data = await highqualityGet({cat, limit: 1})
      setHighquality(data.data)
    })()
  }, [cat])

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div
      className="px-8 overflow-auto max-h-full flex-auto"
    >
      <div className="ui_w1100">
        <Banner item={highquality?.playlists?.[0]} />
        <HeaderBar />
        <Outlet/>
      </div>
    </div>
  );
});
