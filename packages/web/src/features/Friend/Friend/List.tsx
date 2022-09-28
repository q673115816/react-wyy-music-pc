import React, { FC, memo, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useLazyGetEventQuery } from "@/modules/services/friend";
import Dynamic from "@/components/Dynamic";
import Loading from "@/components/Loading";

interface iProps {
  lasttime: number;
  setLasttime: (num: number) => void;
}

const List: FC<iProps> = ({ lasttime, setLasttime }) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const [
    eventGet,
    { data, isSuccess, isFetching, isUninitialized, isLoading },
  ] = useLazyGetEventQuery();

  useEffect(() => {
    if (isUninitialized && intersection && intersection.intersectionRatio > 0) {
      eventGet({
        lasttime,
      });
    }
  }, [intersection]);

  return (
    <div ref={intersectionRef}>
      {isLoading ? (
        <div className="flex-center py-4">
          <Loading />
        </div>
      ) : (
        data?.event?.length > 0 && <Dynamic list={data?.event || []} />
      )}
    </div>
  );
};

export default memo(List);
