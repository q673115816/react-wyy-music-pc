import React, { useState, useRef, memo } from "react";
import { apiArtistMV } from "@/api";
import useInfinite from "@/hooks/useInfinite";
import GridVideo from "@/components/GridVideo";
import { useParams } from "react-router-dom";

export default memo(function MV() {
  const { id } = useParams();
  const [MVs, setMVs] = useState([]);
  // const [hasMore, setHasMore] = useState(true);
  const more = useRef(true);
  const offset = useRef(0);
  const domScroll = useRef<HTMLDivElement>(null);
  const domObserver = useRef<HTMLDivElement>(null);
  const limit = 24;
  const handleInit = async () => {
    if (!more.current) return;
    try {
      const { mvs, time, hasMore } = await apiArtistMV({
        id,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      more.current = hasMore;
      setMVs((prev) => [
        ...prev,
        ...mvs.map(({ id, imgurl, duration, name, playCount }) => ({
          id,
          duration,
          playCount,
          cover: imgurl,
          title: name,
          type: "0",
        })),
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, domScroll, domObserver);

  return (
    <div className="domArtist_section p-8">
      <GridVideo list={MVs} />
      <div ref={domObserver} />
    </div>
  );
});
