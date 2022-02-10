import React, { useRef, memo } from "react";
import useInfinite from "@/hooks/useInfinite";
import GridVideo from "@/components/GridVideo";
import { useParams } from "react-router-dom";
import { useGetArtistMVMutation } from "@/modules/services/artist";
import { useImmer } from "use-immer";
import Loading from "@/components/Loading";
import { MV } from "@/modules/services/types";

const limit = 24;

export default memo(function MV() {
  const { id = "" } = useParams();
  const [MVs, setMVs] = useImmer([]);
  const [MVGet, { isLoading }] = useGetArtistMVMutation();
  // const [hasMore, setHasMore] = useState(true);
  const more = useRef(true);
  const offset = useRef(0);
  const domScroll = useRef<HTMLDivElement>(null);
  const domObserver = useRef<HTMLDivElement>(null);
  const handleInit = async () => {
    if (!more.current) return;
    try {
      const { data } = await MVGet({
        id,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      const mvs = data?.mvs || [];
      const hasMore = data?.hasMore || false;
      more.current = hasMore;
      setMVs((draft) => {
        draft.push(
          ...mvs.map(({ id, imgurl, duration, name, playCount }: MV) => ({
            id,
            duration,
            playCount,
            cover: imgurl,
            title: name,
            type: "0",
          }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, domScroll, domObserver);

  return (
    <div className="domArtist_section p-8">
      <GridVideo list={MVs} />
      <div ref={domObserver} className="flex-center">
        {isLoading && <Loading />}
      </div>
    </div>
  );
});
