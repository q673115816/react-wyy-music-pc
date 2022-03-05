import React, { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { transPlayCount } from "@/common/utils";
import { IconPlayerPlay } from "@tabler/icons";
import { playerTypes, PlayerTypes } from "@/common/config";
import TagMV from "@/components/Tags/Box";
import { useGetRelatedAllVideoQuery } from "@/modules/services/player";
import Loading from "@/components/Loading";

interface iProps {
  id: string;
}

const Related: FC<iProps> = ({ id }) => {
  const { data, error, isLoading, isFetching, isSuccess, isError, refetch } =
    useGetRelatedAllVideoQuery({ id });
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }

  const related = data?.data || [];
  return (
    <div className="related flex flex-col gap-2.5">
      {related.map((item) => (
        <div className="flex" key={item.vid}>
          <Link
            to={`/player/${playerTypes[item.type]}/${item.vid}`}
            className="relative rounded overflow-hidden"
          >
            <img
              loading={"lazy"}
              className="object-cover h-20 w-36"
              src={item.coverUrl}
              alt=""
            />
            <div className="absolute top-0 right-0 mx-2 my-1 flex-center text-white">
              <IconPlayerPlay size={12} />
              {transPlayCount(item.playTime)}
            </div>
            <div className="absolute bottom-0 right-0 mx-2 my-1 text-white">
              {dayjs(item.durationms).format("mm:ss")}
            </div>
          </Link>
          <div className="p-2 flex-1 w-0">
            <div className="ui_ellipse">
              <Link
                title={item.title}
                to={`/player/${playerTypes[item.type]}/${item.vid}`}
                className="ui_text_black_hover"
              >
                {item.type === 0 && <TagMV className="inline-block" />}
                {item.title}
              </Link>
            </div>
            <div className="mt-2 truncate text-gray-400">
              by&nbsp;
              <Link
                to={`/user/${item.creator[0].userId}`}
                className="ui_text_gray_hover"
              >
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Related);
