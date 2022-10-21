import { useLazyGetMVAllQuery } from "@/modules/services/mv";
import React, { FC, memo, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import Loading from "@/components/Loading";
import GridVideo from "@/components/GridVideo";
const limit = 24;

interface iProps {
  area?: string;
  type?: string;
  order?: string;
  index: number;
  setHasMore: () => void;
}

const List: FC<iProps> = ({ area, type, order, index, setHasMore }) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [dataGet, { isUninitialized, isLoading, data }] =
    useLazyGetMVAllQuery();
  useEffect(() => {
    if (isUninitialized && intersection && intersection.intersectionRatio > 0) {
      dataGet({
        area,
        type,
        order,
        limit,
        offset: index * limit,
      });
    }
  }, [intersection]);
  useEffect(() => {
    if (data?.hasMore) setHasMore();
  }, [data]);
  return (
    <div ref={intersectionRef}>
      {isLoading ? (
        <div className="flex-center py-4">
          <Loading />
        </div>
      ) : (
        <GridVideo
          list={data?.data.map(
            ({ id, name, cover, playCount, duration, artists }) => ({
              type: 0,
              playCount,
              id,
              cover,
              duration,
              title: name,
              creator: artists.map(({ id: userId, name: userName }) => ({
                userId,
                userName,
              })),
            })
          )}
        />
      )}
    </div>
  );
};

export default memo(List);
