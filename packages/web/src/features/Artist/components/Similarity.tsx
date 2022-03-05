import React, { memo, FC } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { useGetSimiArtistQuery } from "@/modules/services/artist";

const Similarity = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetSimiArtistQuery({ id });

  const artists = data?.artists || [];

  if (isLoading) return <Loading />;

  if (artists.length === 0) {
    return (
      <div className="text-center text-gray-400 text-sm pt-16">
        没有相似歌手
      </div>
    );
  }
  return (
    <div className="p-8">
      <div className="grid grid-cols-5 gap-5">
        {artists.map((item) => (
          <div className={`space-y-2`} key={item.id}>
            <Link
              to={`/artist/${item.id}`}
              className="block rounded overflow-hidden border"
            >
              <img
                loading={`lazy`}
                className="aspect-square object-fit w-full h-full"
                src={`${item.picUrl}?param=200y200`}
                alt=""
              />
            </Link>
            <div>
              <Link to={`/artist/${item.id}`} className="text-sm">
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Similarity);
