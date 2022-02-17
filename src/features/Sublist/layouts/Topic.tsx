import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInit from "@/features/Sublist/useInit";
import { useGetTopicSubListQuery } from "@/modules/services/sublist";
import HeaderBar from "@/features/Sublist/components/HeaderBar";

const Topic = () => {
  const { filter, setSearch, search, data, isLoading, count } = useInit(
    useGetTopicSubListQuery
  );
  const navigate = useNavigate();
  return (
    <>
      <HeaderBar search={search} setSearch={setSearch} count={count} />
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
            <div className="name truncate">
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
    </>
  );
};

export default memo(Topic);
