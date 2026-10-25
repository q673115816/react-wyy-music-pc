import React, { FC, memo, useEffect, useMemo, useState } from "react";
import GridVideo from "@/components/GridVideo";
import { useGetMVSubListQuery } from "@/modules/services/sublist";
import { useImmer } from "use-immer";
import Bar from "@/features/Sublist/components/Bar";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";

// 本地搜索过滤（原代码误从 "postcss" 引入 rule，Vite 8 下 postcss 不再被提升依赖）
const rule = (data: any[], search: string, reg = new RegExp(search)) =>
  data.filter(
    ({ title, creator }) =>
      reg.test(title) || reg.test(creator?.nickname ?? "")
  );

const Content = ({ filter }) => {
  const memoFilter = useMemo(
    () =>
      filter.map(
        ({ vid, coverUrl, playTime, durationms, title, type, creator }) => ({
          id: vid,
          cover: coverUrl,
          playCount: playTime,
          duration: durationms,
          title,
          type,
          creator,
        })
      ),
    [filter]
  );
  return (
    <div className="px-8">
      <GridVideo list={memoFilter} />
    </div>
  );
};

interface iProps {
  path: string;
}

const MV: FC<iProps> = ({ path }) => {
  const { data: { data = [], count = 0 } = {}, isLoading } =
    useGetMVSubListQuery();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useImmer([]);
  useEffect(() => {
    setFilter(data);
  }, [isLoading]);
  useEffect(() => {
    if (search.trim()) setFilter(rule(data, search));
    else setFilter(data);
  }, [search]);
  return (
    <div>
      <Bar count={count} search={search} setSearch={setSearch} path={path} />
      {isLoading ? (
        <Loading />
      ) : filter?.length > 0 ? (
        <Content filter={filter} />
      ) : (
        <Empty count={count} search={search} path={path} />
      )}
    </div>
  );
};

export default memo(MV);
