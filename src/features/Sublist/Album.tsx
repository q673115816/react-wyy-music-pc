import React, { FC, memo, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { useGetAlbumSubListQuery } from "@/modules/services/sublist";
import Bar from "./components/Bar";
import Loading from "@/components/Loading";
import Empty from "./components/Empty";
import { useImmer } from "use-immer";

const rule = (data, search, reg = new RegExp(search)) =>
  data.filter(
    ({ name, artists }) =>
      reg.test(name) || artists.some(({ name }) => reg.test(name))
  );

const Content = ({ filter }) => {
  const navigate = useNavigate();
  return (
    <div className="domSublist_list">
      {filter.map((item, index) => (
        <div
          role="button"
          className={classNames(
            "sublistItem hover:bg-gray-100 items-center ",
            index % 2 === 0 && "bg-gray-50"
          )}
          key={item.id}
          onClick={() => navigate(`/playlist/album/${item.id}`)}
        >
          <Link
            className="rounded overflow-hidden border w-16 h-16"
            to={`/playlist/album/${item.id}`}
          >
            <img
              className="ui_containimg"
              src={`${item.picUrl}?param=100y100`}
              alt=""
            />
          </Link>
          <div className="px-2.5 truncate">
            <span>{item.name}</span>
            <span className="text-gray-400">
              {item.alias.map((alia) => alia)}
            </span>
          </div>
          <div className="creator">
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
        </div>
      ))}
    </div>
  );
};

interface iProps {
  path: string;
}

const Album: FC<iProps> = ({ path }) => {
  const { data: { data = [], count = 0 } = {}, isLoading } =
    useGetAlbumSubListQuery();
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

export default memo(Album);
