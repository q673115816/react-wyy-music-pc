import React, { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";
import Empty from "@/features/Sublist/components/Empty";
import useInit from "@/features/Sublist/useInit";
import { useGetAlbumSubListQuery } from "@/modules/services/sublist";
const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return <span className="text-gray-400">({alias[0]})</span>;
  }
  if (trans) {
    return <span className="text-gray-400">({trans})</span>;
  }
};

const Artist = () => {
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
        <Link to={`/artist/${item.id}`} className="item" key={item.id}>
          <div className="cover">
            <img
              className="ui_containimg"
              src={`${item.picUrl}?param=100y100`}
              alt=""
            />
          </div>
          <div className="name truncate">
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

export default memo(Artist);
