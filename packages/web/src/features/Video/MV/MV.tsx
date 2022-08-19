import React, { memo } from "react";
import Item from "./Item";
import Official from "./Official";
import Hot from "./Hot";
import First from "./First";
import Rank from "./Rank";
import Category from "./Category";
import { useSessionStorage } from "react-use";
import { category } from "./types";
const MV = () => {
  const [firstArea, setFirstArea] = useSessionStorage("firstArea", category[0]);
  const [topArea, setTopArea] = useSessionStorage("topArea", category[0]);
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <Item
        title={`最新MV`}
        url={`/mv-all?order=最新&area=${firstArea}`}
        Category={<Category onClick={setFirstArea} area={firstArea} />}
      >
        <First area={firstArea} />
      </Item>
      <Item title={`热播MV`} url={`/mv-all?order=最热`}>
        <Hot />
      </Item>
      <Item title={`网易出品`} url={`/mv-all?type=网易出品&order=最新`}>
        <Official />
      </Item>
      <Item
        title={`MV排行榜`}
        url={`/toplist-mv`}
        Category={<Category onClick={setTopArea} area={topArea} />}
      >
        <Rank area={topArea} />
      </Item>
    </div>
  );
};

export default memo(MV);
