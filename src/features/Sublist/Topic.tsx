import React, { FC, memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetMVSubListQuery,
  useGetTopicSubListQuery,
} from "@/modules/services/sublist";
import { useImmer } from "use-immer";
import { rule } from "postcss";
import Bar from "@/features/Sublist/components/Bar";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";

const Content = ({ filter }) => {
  const navigate = useNavigate();
  return (
    <div className="domSublist_list">
      {filter.map((item) => (
        <button
          type="button"
          className="item"
          key={item.id}
          onClick={() => navigate(`/playlist/music/${item.id}`)}
        >
          <div className="cover">
            <Link to={`/playlist/music/${item.id}`}>
              <img
                className="ui_containimg"
                src={`${item.picUrl}?param=100y100`}
                alt=""
              />
            </Link>
          </div>
          <div className="px-2.5 truncate">
            <Link to={`/playlist/music/${item.id}`}>{item.name}</Link>
            <span className="text-gray-400">
              {item.alias.map((alia: string) => alia)}
            </span>
          </div>
          <div className="artist">
            {item.artists.map((artist) => (
              <Link
                key={artist.id}
                onClick={(e) => e.stopPropagation()}
                to={`/artist/${artist.id}`}
                className="text-gray-400 hover"
              >
                {artist.name}
              </Link>
            ))}
          </div>
          <div className="size text-gray-400">{item.size}首</div>
        </button>
      ))}
    </div>
  );
};

interface iProps {
  path: string;
}

const Topic: FC<iProps> = ({ path }) => {
  const { data: { data = [], count = 0 } = {}, isLoading } =
    useGetTopicSubListQuery();
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

export default memo(Topic);
