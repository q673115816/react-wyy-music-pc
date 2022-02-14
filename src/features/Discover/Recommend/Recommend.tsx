import React, { createElement, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { setDialogHomeOrderShow } from "@/modules/reducers/mask/slice";
import Swiper from "@/components/Swiper";
import { IconChevronRight } from "@tabler/icons";
import KANKAN from "@/components/AdLookRectangle";
import DialogHomeOrder from "@/components/Dialog/HomeOrder";

import Loading from "@/components/Loading";
import playlist from "./playlist";
import Privatecontent from "./Privatecontent";
import Newsong from "./Newsong";
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
import { Order, settingSelector } from "@/modules/reducers/setting/slice";

const config: { [key in Order]: [string, ReactNode] } = {
  推荐歌单: ["/discover/playlist", playlist],
  独家放送: ["/exclusive", Privatecontent],
  最新音乐: ["/home/playlist", Newsong],
  推荐MV: ["/video/mvlist", MV],
  主播电台: ["/discover/dj", DJProgram],
  看看: [
    "https://look.163.com/hot?livetype=2",
    () => (
      <div className="mt-4 grid grid-cols-4 gap-5">
        {Object.keys(Array(4).fill(0)).map((item) => (
          <KANKAN key={item} />
        ))}
      </div>
    ),
  ],
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
          const [path, Dom] = config[name];
          return (
            <div className="mt-8" key={name}>
              <Link className="h1 inline-flex items-center" to={path}>
                {name}
                <IconChevronRight size={24} />
              </Link>
              {createElement(Dom, {
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
