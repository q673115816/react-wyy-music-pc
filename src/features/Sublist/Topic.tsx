import React, { memo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiTopicSublist } from "@/api";
import Search from "@/components/HeaderBarSearch";
import useInit from "./useInit";
import Empty from "./components/Empty";
import HeaderBar from "./components/HeaderBar";

const NAME = "专栏";

const ListBuild = (filter, search, navigate) => {
  if (search && filter.length === 0) {
    return <Empty tips={`未能找到与“${search}”相关的任何${NAME}`} />;
  }
  if (filter.length > 0) {
    return filter.map((item) => (
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
    ));
  }
  return <Empty tips={`暂无收藏 ${NAME}`} />;
};

const Topic = () => {
  const navigate = useNavigate();
  const { path = "" } = useParams();
  const { count, setSearch, search, filter } = useInit(apiTopicSublist);
  return (
    <>
      <HeaderBar search={search} setSearch={setSearch} count={count} />
      <div className="domSublist_list">
        {ListBuild(filter, search, navigate)}
      </div>
    </>
  );
};

export default memo(Topic);
