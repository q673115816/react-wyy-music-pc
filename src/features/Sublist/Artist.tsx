import React, { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";
import useInit from "@/features/Sublist/useInit";
import { useGetArtistSubListQuery } from "@/modules/services/sublist";
import classNames from "classnames";
import Bar from "@/features/Sublist/components/Bar";
const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return <span className="text-gray-400">({alias[0]})</span>;
  }
  if (trans) {
    return <span className="text-gray-400">({trans})</span>;
  }
};

const Content = ({ isLoading, count, search, path, filter }) => {
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  if (count === 0) {
    return <Empty count={count} search={search} path={path} />;
  }
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

const rule = (data, search, reg = new RegExp(search)) =>
  data.filter(
    ({ name, trans = "", alias }) =>
      reg.test(name) || reg.test(trans) || alias.some((alia) => reg.test(alia))
  );

const Artist = ({ path }) => {
  const { data, isLoading } = useGetArtistSubListQuery();
  const { filter, count, search, setSearch } = useInit(data, rule);
  return (
    <>
      <Bar path={path} count={count} search={search} setSearch={setSearch} />
      <Content
        path={path}
        isLoading={isLoading}
        search={search}
        count={count}
        filter={filter}
      />
    </>
  );
};

export default memo(Artist);
