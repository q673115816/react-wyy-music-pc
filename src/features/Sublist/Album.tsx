import React, { FC, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";
import useInit from "./useInit";
import { useGetAlbumSubListQuery } from "@/modules/services/sublist";

const Album = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(9);
  // const { isLoading, count, search, setSearch, filter } = useInit(path);
  const { data, isLoading } = useGetAlbumSubListQuery();
  const count = data?.count || 0;
  const navigate = useNavigate();
  const filter = data?.data || [];
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  // if (count === 0) {
  //   return <Empty count={count} search={search} path={path} />;
  // }
  return (
    <div className="domSublist_list">
      {filter.map((item) => (
        <div
          role="button"
          className="item"
          key={item.id}
          onClick={() => navigate(`/playlist/album/${item.id}`)}
        >
          <div className="cover">
            <Link to={`/playlist/album/${item.id}`}>
              <img
                className="ui_containimg"
                src={`${item.picUrl}?param=100y100`}
                alt=""
              />
            </Link>
          </div>
          <div className="name truncate">
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

export default memo(Album);
