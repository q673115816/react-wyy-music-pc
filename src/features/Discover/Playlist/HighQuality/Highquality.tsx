import React, { memo, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { IconCrown, IconPlayerPlay } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";
import PlaylistAsyncReplace from "@/components/GroupPlay/PlaylistAsyncReplace";
import TagsBox from "@/components/Tags/Box";
import useInfinite from "@/hooks/useInfinite";
import { useGetTopPlaylistHighqualityMutation } from "@/modules/services/discover";
import Loading from "@/components/Loading";
import { useImmer } from "use-immer";
import { Highquality as iHighquality } from "@/modules/services/discover";
const Highquality = () => {
  const { cat = "" } = useParams();
  const before = useRef(0);
  const [data, setData] = useImmer<iHighquality[]>([]);
  const [highQualityGet, { isLoading }] =
    useGetTopPlaylistHighqualityMutation();
  const domObserver = useRef(null);
  const domScroll = useRef(null);
  const handleInit = async () => {
    try {
      const data = await highQualityGet({
        cat,
        limit: 20,
        before: before.current,
      });
      const playlists = data?.data?.playlists || [];
      const lasttime = data?.data?.lasttime;
      before.current = lasttime;
      setData((draft) => {
        draft.push(...playlists);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useInfinite(handleInit, null, domObserver);
  useEffect(() => {
    setData([]);
    // handleInit()
  }, [cat]);
  // useEffect(() => {
  //   setData([]);
  // }, [cat]);

  return (
    <div className="grid gap-6 grid-cols-2">
      {data.map((item) => (
        <div className="item flex" key={item.id}>
          <div className="cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative">
            <Link to={`/playlist/music/${item.id}`} className="">
              <span className="absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left">
                <IconCrown size={14} className="transform -rotate-45" />
              </span>
              <img
                loading={`lazy`}
                src={`${item.coverImgUrl}?param=200y200`}
                className={`aspect-square`}
                alt=""
              />
              <div className="absolute text-white top-0 right-0 py-1 px-2 flex-center">
                <IconPlayerPlay size={12} />
                {transPlayCount(item.playCount)}
              </div>
            </Link>
            <PlaylistAsyncReplace
              id={item.id}
              className="playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full"
            >
              <IconPlayerPlay size={16} className="fill-current" />
            </PlaylistAsyncReplace>
          </div>
          <div className="ml-2 flex-auto w-0 pt-5">
            <div className="text-sm truncate ui_text_black_hover">
              <Link to={`/playlist/music/${item.id}`} className="">
                {item.name}
              </Link>
            </div>
            <div className="mt-3 flex items-center ui_text_gray_hover">
              by&nbsp;
              <Link to={`/user/${item.userId}`} className="">
                {item.creator.nickname}
              </Link>
              &nbsp;
              {item?.creator?.avatarDetail?.identityIconUrl && (
                <img
                  className="w-3 h-3"
                  src={item.creator.avatarDetail.identityIconUrl}
                  alt=""
                />
              )}
            </div>
            <div className="mt-4 text-gray-300 flex items-center">
              <TagsBox text={item.tag} className="flex-none mr-1" />
              <span className="flex-auto truncate">{item.copywriter}</span>
            </div>
          </div>
        </div>
      ))}
      <div ref={domObserver}>
        <Loading />
      </div>
    </div>
  );
};

export default memo(Highquality);
