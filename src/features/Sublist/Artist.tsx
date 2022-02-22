import React, { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useGetArtistSubListQuery } from "@/modules/services/sublist";
import { useImmer } from "use-immer";
import Bar from "@/features/Sublist/components/Bar";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";
import { iProps } from "@/features/Artist/layouts/types";
const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return <span className="text-gray-400">({alias[0]})</span>;
  }
  if (trans) {
    return <span className="text-gray-400">({trans})</span>;
  }
};

const Content = ({ filter }) => {
  return (
    <div className="domSublist_list">
      {filter.map((item, index) => (
        <Link
          to={`/artist/${item.id}`}
          className={classNames(
            "sublistItem hover:bg-gray-100 items-center ",
            index % 2 === 0 && "bg-gray-50"
          )}
          key={item.id}
        >
          <div className="rounded overflow-hidden border w-16 h-16">
            <img
              className="ui_containimg"
              src={`${item.picUrl}?param=100y100`}
              alt=""
            />
          </div>
          <div className="px-2.5 truncate">
            {item.name}
            &nbsp;
            {AliasOrTrans(item)}
          </div>
          <div className="creator text-gray-400">
            专辑：
            {item.albumSize}
          </div>
          <div className="size text-gray-400">
            MV：
            {item.mvSize}
          </div>
        </Link>
      ))}
    </div>
  );
};

interface iProps {
  path: string;
}

const Artist: FC<iProps> = ({ path }) => {
  const { data: { data = [], count = 0 } = {}, isLoading } =
    useGetArtistSubListQuery();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useImmer([]);
  useEffect(() => {
    setFilter(data);
  }, [isLoading]);
  useEffect(() => {
    setFilter(rule(data, search));
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

const rule = (data, search, reg = new RegExp(search)) =>
  data.filter(
    ({ name, trans = "", alias }) =>
      reg.test(name) || reg.test(trans) || alias.some((alia) => reg.test(alia))
  );

export default memo(Artist);
