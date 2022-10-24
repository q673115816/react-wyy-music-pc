import React, { memo } from "react";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";

import Item from "./Item";
import {
  useGetDJCategoryRecommendQuery,
  useGetDJPersonalizeRecommendQuery,
  useGetDJRadioHotQuery,
} from "@/modules/services/dj";
import Category from "./Category";

const navs = ["创作翻唱", "声之剧场", "音乐故事", "情感调频", "声音恋人"];

const DJ = () => {
  const { data: resCategoryRecommend } = useGetDJCategoryRecommendQuery();
  const { data: resPersonalizeRecommend, isLoading } =
    useGetDJPersonalizeRecommendQuery();
  const { data: res创作翻唱 } = useGetDJRadioHotQuery({
    cateId: 2001,
    limit: 6,
  });
  const { data: res声之剧场 } = useGetDJRadioHotQuery({
    cateId: 10001,
    limit: 6,
  });
  const { data: res音乐故事 } = useGetDJRadioHotQuery({
    cateId: 2,
    limit: 6,
  });
  const { data: res情感调频 } = useGetDJRadioHotQuery({
    cateId: 3,
    limit: 6,
  });
  const { data: res声音恋人 } = useGetDJRadioHotQuery({
    cateId: 3001,
    limit: 6,
  });
  const DjPersonalizeRecommend = resPersonalizeRecommend?.data || [];
  const result = {
    创作翻唱: res创作翻唱?.djRadios || [],
    声之剧场: res声之剧场?.djRadios || [],
    音乐故事: res音乐故事?.djRadios || [],
    情感调频: res情感调频?.djRadios || [],
    声音恋人: res声音恋人?.djRadios || [],
  };

  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="px-8 pt-8 overflow-auto max-h-full flex-auto">
      <div className="pb-16 ui_w1100">
        <div className={"flex gap-5"}>
          <div className={`flex-1`}></div>
          <Category />
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <div>
            <div className="h1">电台个性推荐</div>
            <div className="mt-4 grid grid-cols-5 gap-5">
              {DjPersonalizeRecommend.slice(0, 5).map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </div>
          {navs.map((name) => (
            <div key={name}>
              <Link className="h1" to={`/dj-category/${name}`}>
                {name}
                &gt;
              </Link>
              <div className="mt-4 grid grid-cols-5 gap-5">
                {result?.[name].slice(0, 5).map((item) => (
                  <Item item={item} key={item.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(DJ);
