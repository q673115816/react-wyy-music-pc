import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import dayjs from "dayjs";
import { apiToplistDetail, apiPlaylistDetail, apiToplistArtist } from "@/api";
import { setTopListsDetail } from "@/modules/reducers/home/slice";
import { transPlayCount } from "@/common/utils";
import Loading from "@/components/Loading";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import Content from "./Content";

export default memo(function TopList() {
  const { list = [] } = useAppSelector(({ home }) => home.toplist);
  const dispatch = useAppDispatch();

  const [fiveTop, setFiveTop] = useState([]);
  const [artists, setArtists] = useState({});
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const { list } = await apiToplistDetail();
      dispatch(setTopListsDetail({ list }));
      const [飙升榜, 新歌榜, 原创榜, 热歌榜, 歌手榜] = await Promise.all([
        ...list
          .slice(0, 4)
          .map((item) => apiPlaylistDetail({ id: item.id, limit: 5 })),
        apiToplistArtist(1),
      ]);
      setFiveTop([飙升榜, 新歌榜, 原创榜, 热歌榜]);
      setArtists(歌手榜);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (loading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <div className="ui_w1100">
        <div className="h1 mb-4">官方榜</div>
        <div className="space-y-12">
          {fiveTop.map(({ playlist: item }) => (
            <div key={item.id} className="official_rank flex">
              <Link
                to={`/playlist/music/${item.id}`}
                className="official_rank_cover mr-9 w-44 h-44 rounded-lg overflow-hidden relative group"
              >
                <img
                  className="ui_containimg"
                  src={`${item.coverImgUrl}?param=176y176`}
                  alt=""
                />
                <div className="absolute inset-0 m-auto flex-center text-white">
                  <span className="pt-16">
                    {dayjs(item.updateTime).format("MM月DD日")}
                    更新
                  </span>
                </div>
                <button
                  type="button"
                  className="opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50"
                >
                  <IconPlayerPlay size={22} className="fill-current" />
                </button>
              </Link>
              <div className="official_rank_content flex-auto relative">
                <Content tracks={item.tracks.slice(0, 5)} />
                <Link
                  to={`/playlist/music/${item.id}`}
                  className="text-gray-400 hover:text-gray-500 absolute mt-2"
                >
                  查看全部 &gt;
                </Link>
              </div>
            </div>
          ))}
          {/*<div className="official_rank flex">
            <Link
              to="/artist-topList"
              className="official_rank_cover overflow-hidden relative group"
            >
              歌手榜
              <div className="absolute inset-0 m-auto flex-center text-white">
                <span className="pt-16">
                  {dayjs(artists.list?.updateTime).format("MM月DD日")}
                  更新
                </span>
              </div>
              <button
                type="button"
                className="opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50"
              >
                <IconPlayerPlay size={22} className="fill-current" />
              </button>
            </Link>
            <div className="official_rank_content flex-auto">
              <div className="official_rank_list mb-3">
                {artists?.list?.artists?.slice(0, 5).map((item, index) => (
                  <Link
                    key={item.id}
                    className={classNames("item hover:bg-gray-100", {
                      "bg-gray-50": index % 2 === 0,
                    })}
                    to={`/artist/${item.id}`}
                  >
                    <div
                      className={classNames("index w-4", {
                        "text-red-500": index < 3,
                      })}
                    >
                      {index + 1}
                    </div>
                    <div className="status w-4 flex-center">
                      {item.lastRank === index && "-"}
                      {item.lastRank < index && "↓"}
                      {item.lastRank > index && "↑"}
                    </div>
                    <div className="name">{item.name}</div>
                  </Link>
                ))}
              </div>
              <Link
                to="/toplistartist"
                className="text-gray-400 hover:text-gray-500"
              >
                查看全部 &gt;
              </Link>
            </div>
          </div>*/}
        </div>
        <div className="h1 mt-7 mb-4">全球榜</div>
        <div className="grid grid-cols-5 gap-5">
          {list.slice(4).map((item) => (
            <div className="item flex flex-col" key={item.id}>
              <Link
                to={`/playlist/music/${item.id}`}
                className="cover group rounded overflow-hidden relative"
              >
                <span className="playCount flex items-center absolute top-0 right-0 py-0.5 px-2 text-white">
                  <IconPlayerPlay size={12} />
                  {transPlayCount(item.playCount)}
                </span>
                <img
                  className=""
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
                <button
                  type="button"
                  className="play opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white bg-op text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95"
                >
                  <IconPlayerPlay size={20} className="fill-current" />
                </button>
              </Link>
              <Link
                to={`/playlist/music/${item.id}`}
                className="name mt-1 text-sm text-gray-600 hover:text-black"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
