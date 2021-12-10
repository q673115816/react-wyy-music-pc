import React, { useState, useEffect, useRef, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import {
  apiTopPlaylist,
  apiPlaylistCatlist,
  apiTopPlaylistHighquality,
  apiPlaylistHighqualityTags,
  apiPlaylistHot,
} from "@/api";
import { setTopPlaylist, setPlaylistCatlist } from "@/reducers/home/slice";
import Loading from "@/components/Loading";
import Resize from "@/components/ResizeObserver";
import DomPage from "@/components/Page";
import Item from "@/components/GridPlaylist/Item";
import Banner from "./components/Banner";
import HeaderBar from "./components/HeaderBar";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";

export default memo(function Playlist() {
  const { cat, page } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState("hot"); // new , default = hot
  // const [offer, setOffer] = useState(0);
  const [loading, setLoading] = useState(true);
  const { highquality, playlists } = useAppSelector(
    ({ home: { playlist } }) => playlist
  );
  const dispatch = useAppDispatch();
  const DomScroll = useRef(null);

  const handleProInit = async () => {
    try {
      const [hot, catlist] = await Promise.all([
        apiPlaylistHot(),
        apiPlaylistCatlist(),
      ]);
      dispatch(
        setPlaylistCatlist({
          hot,
          catlist,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    setLoading(true);

    try {
      const highquality = await apiTopPlaylistHighquality({
        cat,
        limit: 1,
      });
      const playlists = await apiTopPlaylist({
        order,
        cat,
        limit: 100,
        offset: (page - 1) * 100,
      });
      dispatch(
        setTopPlaylist({
          highquality,
          playlists,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      DomScroll.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleProInit();
  }, []);

  useEffect(() => {
    handleInit();
  }, [order, cat, page]);
  if (loading) {
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div
      className="domHome_playlist px-8 overflow-auto max-h-full flex-auto"
      ref={DomScroll}
    >
      <div className="ui_w1100">
        {highquality.playlists.length > 0 && (
          <Banner item={highquality.playlists[0]} cat={cat} />
        )}
        <HeaderBar cat={cat} />
        <Resize
          className="domHome_playlist_list grid gap-5"
          small="grid-cols-4"
          big="grid-cols-5"
        >
          {playlists.playlists.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </Resize>
        <DomPage
          total={Math.ceil(playlists.total / 100)}
          page={page}
          func={(props) => navigate(`${props}`)}
        />
      </div>
    </div>
  );
});
