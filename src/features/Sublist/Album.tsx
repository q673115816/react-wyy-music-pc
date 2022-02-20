import React, { FC, memo, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";
import useInit from "./useInit";
import { useGetAlbumSubListQuery } from "@/modules/services/sublist";
import Bar from "./components/Bar";
import classNames from "classnames";

const rule = (data, search, reg = new RegExp(search)) =>
  data.filter(
    ({ name, artists }) =>
      reg.test(name) || artists.some(({ name }) => reg.test(name))
  );

interface iProps {
  isLoading: boolean;
  count: number;
  search: string;
  path: string;
  filter: [];
}

const Content: FC<iProps> = ({ isLoading, count, search, path, filter }) => {
  const navigate = useNavigate();
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

const Album = ({ path }) => {
  const { data, isLoading } = useGetAlbumSubListQuery();
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

export default memo(Album);
