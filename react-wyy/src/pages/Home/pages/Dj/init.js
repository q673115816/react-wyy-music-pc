import { setHomeDj } from '@/redux/actions';

import {
  apiDjBanner, apiDjCategoryRecommend, apiDjPersonalizeRecommend, apiDjRadioHot,
} from '@/api';

export default async ({ dispatch }) => {
  try {
    const [
      DjBanner,
      category,
      DjPersonalizeRecommend,
      创作翻唱,
      声之剧场,
      音乐故事,
      情感调频,
      声音恋人] = await Promise.all([
      apiDjBanner(),
      apiDjCategoryRecommend(),
      apiDjPersonalizeRecommend(),
      apiDjRadioHot({
        cateId: 2001,
        limit: 6,
      }),
      apiDjRadioHot({
        cateId: 10001,
        limit: 6,
      }),
      apiDjRadioHot({
        cateId: 2,
        limit: 6,
      }),
      apiDjRadioHot({
        cateId: 3,
        limit: 6,
      }),
      apiDjRadioHot({
        cateId: 3001,
        limit: 6,
      }),
    ]);
    dispatch(setHomeDj({
      DjBanner: DjBanner.data,
      category: category.data,
      DjPersonalizeRecommend: DjPersonalizeRecommend.data,
      创作翻唱: 创作翻唱.djRadios,
      声之剧场: 声之剧场.djRadios,
      音乐故事: 音乐故事.djRadios,
      情感调频: 情感调频.djRadios,
      声音恋人: 声音恋人.djRadios,
    }));
  } catch (error) {
    console.log(error);
  }
};
