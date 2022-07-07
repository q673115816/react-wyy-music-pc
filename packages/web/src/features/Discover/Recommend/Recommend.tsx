import React, { createElement, FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { setDialogHomeOrderShow } from "@/modules/reducers/mask/slice";
import Swiper from "@/components/Swiper";
import { IconChevronRight } from "@tabler/icons";
import AD from "./AD";
import DialogHomeOrder from "@/components/Dialog/HomeOrder";

import Loading from "@/components/Loading";
import playlist from "./playlist";
import Privatecontent from "./Privatecontent";
import NewSong from "./NewSong";
import DJProgram from "./DJProgram";
import MV from "./MV";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  useGetBannerQuery,
  useGetPersonalizedDJProgramQuery,
  useGetPersonalizedMVQuery,
  useGetPersonalizedNewsongQuery,
  useGetPersonalizedPrivatecontentQuery,
  useGetRecommendResourceQuery,
} from "@/modules/services/discover";
import {
  Order,
  Orders,
  settingSelector,
} from "@/modules/reducers/settings/slice";

const paths: { [key in Order]: string } = {
  推荐歌单: "/discover/playlist",
  独家放送: "/exclusive",
  最新音乐: "/home/playlist",
  推荐MV: "/video/mvlist",
  主播电台: "/discover/dj",
};

const nodes: { [key in Order]: FC } = {
  推荐歌单: playlist,
  独家放送: Privatecontent,
  最新音乐: NewSong,
  推荐MV: MV,
  主播电台: DJProgram,
};

const Recommend = () => {
  const { data: resBanners, isLoading } = useGetBannerQuery();
  const { data: resResource } = useGetRecommendResourceQuery();
  const { data: resPrivatecontent } = useGetPersonalizedPrivatecontentQuery();
  const { data: resNewsong } = useGetPersonalizedNewsongQuery({
    limit: 12,
  });
  const { data: resMV } = useGetPersonalizedMVQuery();
  const { data: resDJProgram } = useGetPersonalizedDJProgramQuery();
  const banners = resBanners?.banners || [];
  const playlist = resResource?.recommend || [];
  const privatecontent = resPrivatecontent?.result || [];
  const newsong = resNewsong?.result || [];
  const mv = resMV?.result || [];
  const djprogram = resDJProgram?.result || [];

  const { order } = useAppSelector(settingSelector);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <div className="ui_w1100">
        <Swiper banners={banners} />
        {order.map((name) => {
          return (
            <div className="mt-8" key={name}>
              <Link className="h1 inline-flex items-center" to={paths[name]}>
                {name}
                <IconChevronRight size={24} />
              </Link>
              {createElement(nodes[name], {
                playlist,
                privatecontent,
                newsong,
                mv,
                djprogram,
              })}
            </div>
          );
        })}
        <div className="mt-4 text-center pb-10">
          <div className="text-gray-500 mb-4">
            现在可以根据个人喜好，自由调整首页栏目顺序啦~
          </div>
          <button
            type="button"
            className="ui_themeColor border rounded border-current w-32 h-8"
            onClick={() => dispatch(setDialogHomeOrderShow())}
          >
            调整栏目顺序
          </button>
        </div>
        <DialogHomeOrder />
      </div>
    </div>
  );
};

export default memo(Recommend);
