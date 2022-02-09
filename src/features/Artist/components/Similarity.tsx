import React, { memo, FC} from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import {useGetSimiArtistQuery} from "@/modules/services/artist";

const Similarity = () => {
  const {id = ''} = useParams()
  const {data, isLoading} = useGetSimiArtistQuery({id})

  if (isLoading) {
    return (
      <div className="flex justify-center pt-12">
        <Loading />
      </div>
    );
  }
  const artists = data?.artists || []

  if (artists.length === 0) {
    return (
      <div className="text-center text-gray-400 text-sm pt-16">
        没有相似歌手
      </div>
    );
  }
  return (
    <div className="domArtist_section p-8">
      <div className="grid grid-cols-5 gap-5">
        {artists.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover rounded overflow-hidden border">
              <Link to={`/artist/${item.id}`} className="">
                <img
                  loading={`lazy`}
                  className="aspect-square"
                  src={`${item.picUrl}?param=200y200`}
                  alt=""
                />
              </Link>
            </div>
            <div className="footer text-sm mt-2">
              <Link to={`/artist/${item.id}`} className="">
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Similarity)
