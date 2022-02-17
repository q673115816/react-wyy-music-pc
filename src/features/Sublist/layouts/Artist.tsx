import React, { memo } from "react";
import { Link } from "react-router-dom";
import HeaderBar from "@/features/Sublist/components/HeaderBar";
import useInit from "@/features/Sublist/useInit";
import { useGetArtistSubListQuery } from "@/modules/services/sublist";

const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return <span className="text-gray-400">({alias[0]})</span>;
  }
  if (trans) {
    return <span className="text-gray-400">({trans})</span>;
  }
};

const filterRule = (data, search) =>
  data.filter(
    (item) =>
      item.name.indexOf(search) >= 0 ||
      item?.trans?.indexOf(search) >= 0 ||
      item.alias.find((alia) => alia.indexOf(search) >= 0)
  );

const Artist = () => {
  const { filter, setSearch, search, data, isLoading, count } = useInit(
    useGetArtistSubListQuery
  );
  return (
    <>
      <HeaderBar search={search} setSearch={setSearch} count={count} />
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
    </>
  );
};

export default memo(Artist);
