import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiAlbumSublist } from "@/api";
import Search from "@/components/HeaderBarSearch";
import useInit from "./useInit";
import Empty from "./components/Empty";
import ListItem from "./components/ListItem";

const NAME = "专辑";

const ListBuild = (filter, search, navigate) => {
  if (search && filter.length === 0) {
    return <Empty tips={`未能找到与“${search}”相关的任何${NAME}`} />;
  }
  if (filter.length > 0) {
    return filter.map((item) => (
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
          <Link to={`/playlist/album/${item.id}`}>{item.name}</Link>
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
    ));
  }
  return <Empty tips={`暂无收藏 ${NAME}`} />;
};

const filterRule = (data, search) =>
  data.filter(
    (item) =>
      item.name.indexOf(search) >= 0 ||
      item.artists.find((artist) => artist.name.indexOf(search) >= 0)
  );

const Album = () => {
  const navigate = useNavigate();
  const { count, setSearch, search, filter } = useInit(
    apiAlbumSublist,
    filterRule
  );
  return (
    <div className="domSublist_list">{ListBuild(filter, search, navigate)}</div>
  );
};

export default memo(Album);
