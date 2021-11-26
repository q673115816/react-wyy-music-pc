import React, { useState, useEffect, memo } from "react";
import { apiSimiArtist } from "@/api";
import { Link } from "react-router-dom";
import DomLoading from "@/components/Loading";

export default memo(({ id }) => {
  const [simiArtists, setSimiArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const { artists } = await apiSimiArtist({
        id,
      });
      setSimiArtists(artists);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center pt-12">
        <DomLoading />
      </div>
    );
  }
  if (simiArtists.length === 0) {
    return (
      <div className="text-center text-gray-400 text-sm pt-16">
        没有相似歌手
      </div>
    );
  }
  return (
    <div className="domArtist_section p-8">
      <div className="grid grid-cols-5 gap-5">
        {simiArtists.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover rounded overflow-hidden border">
              <Link to={`/artist/${item.id}`} className="">
                <img
                  loading={`lazy`}
                  className="ui_aspect-ratio-1/1"
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
});
