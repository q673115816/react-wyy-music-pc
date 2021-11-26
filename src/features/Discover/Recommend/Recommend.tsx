import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  apiBanner,
  apiRecommendResource,
  apiPersonalizedPrivatecontent,
  apiPersonalizedNewsong,
  apiPersonalizedMV,
  apiPersonalizedDjprogram,
} from "@/api";
import { setHomeRecommend } from "@/reducers/home/slice";
import { setDialogHomeOrderShow } from "@/reducers/mask/slice";
import DomSwiper from "@/components/Swiper";
import { IconChevronRight } from "@tabler/icons";
import DOMkankan from "@/components/AdLookRectangle";
import DialogHomeOrder from "@/components/Dialog/HomeOrder";

import Loading from "@/components/Loading";
import RecommendPlaylist from "./playlist";
import RecommendPrivatecontent from "./Privatecontent";
import RecommendNewsong from "./Newsong";
import RecommendDjprogram from "./Djprogram";
import RecommendMV from "./MV";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";

const GridObj = {
  推荐歌单: ["/home/playlist", RecommendPlaylist],
  独家放送: ["/exclusive", RecommendPrivatecontent],
  最新音乐: ["/home/playlist", RecommendNewsong],
  推荐MV: ["/video/mvlist", RecommendMV],
  主播电台: ["/home/dj", RecommendDjprogram],
  看看: [
    "https://look.163.com/hot?livetype=2",
    () => (
      <div className="domHome_recommend_kankan mt-4 grid grid-cols-4 gap-5">
        {Object.keys(Array(4).fill(0)).map((item) => (
          <DOMkankan key={item} />
        ))}
      </div>
    ),
  ],
};

const Recommend = () => {
  const { banners, playlist, privatecontent, newsong, mv, djprogram } =
    useAppSelector(({ home }) => home.recommend);
  const { homeOrder } = useAppSelector(({ setting }) => setting);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const handleInit = async () => {
    try {
      const [
        { banners },
        { recommend: playlist },
        PersonalizedPrivatecontent,
        PersonalizedNewsong,
        PersonalizedMV,
        PersonalizedDjprogram,
      ] = await Promise.all([
        apiBanner(),
        apiRecommendResource({
          limit: 10,
        }),
        apiPersonalizedPrivatecontent(),
        apiPersonalizedNewsong({
          limit: 12,
        }),
        apiPersonalizedMV(),
        apiPersonalizedDjprogram(),
      ]);
      dispatch(
        setHomeRecommend({
          banners,
          playlist,
          privatecontent: PersonalizedPrivatecontent.result,
          newsong: PersonalizedNewsong.result,
          mv: PersonalizedMV.result,
          djprogram: PersonalizedDjprogram.result,
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (loading) {
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div className="domHome_content px-8 overflow-auto max-h-full flex-auto">
      <div className="domHome_recommend ui_w1100">
        <div className="domHome_item">
          <DomSwiper list={banners} coverSrc="imageUrl" />
        </div>
        {homeOrder.map((name) => {
          const [path, Dom] = GridObj[name];
          return (
            <div className="domHome_item mt-8" key={name}>
              <Link
                className="domHome_recommend_subtitle h1 inline-flex items-center"
                to={path}
              >
                {name}
                <IconChevronRight size={24} />
              </Link>
              <Dom
                {...{
                  playlist,
                  privatecontent,
                  newsong,
                  mv,
                  djprogram,
                }}
              />
            </div>
          );
        })}
        <div className="domHome_recommend_diy mt-4 text-center pb-10">
          <div className="text-gray-500">
            现在可以根据个人喜好，自由调整首页栏目顺序啦~
          </div>
          <br />
          <button
            type="button"
            className="btn ui_themeColor border rounded-sm border-current w-32 h-8"
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
