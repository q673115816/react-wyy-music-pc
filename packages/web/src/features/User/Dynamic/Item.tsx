import React, { type Dispatch, FC, memo, useEffect, useRef } from "react";
import Dynamic from "@/components/Dynamic";

import { useLazyGetUserEventQuery } from "@/modules/services/user";
import { useParams } from "react-router";
import { useIntersection } from "react-use";
import Loading from "@/components/Loading";

interface iProps {
  lasttime: number;
  setList: Dispatch<React.SetStateAction<number[]>>;
}

const Item: FC<iProps> = ({ lasttime, setList }) => {
  const { uid = "" } = useParams();
  const [trigger, { isLoading, isSuccess, data, isUninitialized }] =
    useLazyGetUserEventQuery();
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const handleInit = async () => {
    const { data } = await trigger({
      uid,
      lasttime,
    });
    if (data.more) setList((prev) => [...prev, data.lasttime]);
    if (data.size === 0) setList([]);
  };

  useEffect(() => {
    if (isUninitialized && intersection && intersection.intersectionRatio > 0) {
      handleInit();
    }
  }, [intersection]);

  return (
    <div ref={intersectionRef}>
      {!isSuccess ? (
        <div className="flex-center py-4">
          <Loading />
        </div>
      ) : (
        <Dynamic list={(data?.events ?? []) as any} />
      )}
    </div>
  );
};

export default memo(Item);
