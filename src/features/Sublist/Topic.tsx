import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";
import Empty from "./components/Empty";
import { useGetTopicSubListQuery } from "@/modules/services/sublist";

const Topic = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetTopicSubListQuery();
  const count = data?.count || 0;
  const filter = data?.data || [];
  if (isLoading) {
    return <Loading />;
  }
  // if (count === 0) {
  //   return <Empty count={count} search={search} path={path} />;
  // }
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

export default memo(Topic);
