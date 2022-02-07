import React, { FC, memo } from "react";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { transPlayCount } from "@/common/utils";
import { IconPlayerPlay } from "@tabler/icons";
import { playerTypes } from "@/common/config";
import TagMV from "@/components/Tags/Box";
import { useGetRelatedAllVideoQuery } from "@/modules/services/player";
import Loading from "@/components/Loading";

interface iProps {}

const Related: FC<iProps> = () => {
  const { vid: id } = useParams<string>();
  const { data, error, isLoading, isFetching, isSuccess, isError, refetch } =
    useGetRelatedAllVideoQuery({ id });
  const related = data?.data || [];
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="right flex flex-col gap-2.5">
      {related.map((item) => (
        <div className="flex" key={item.vid}>
          <Link
            to={`/player/${playerTypes[item.type]}/${item.vid}`}
            className="relative flex-0 rounded overflow-hidden"
          >
            <img
              className="ratio-video object-scale-down"
              style={{ height: 80 }}
              src={item.coverUrl}
              alt=""
            />
            <div className="playTime absolute top-0 right-0 mx-2 my-1 flex-center text-white">
              <IconPlayerPlay size={12} />
              {transPlayCount(item.playTime)}
            </div>
            <div className="durationms absolute bottom-0 right-0 mx-2 my-1 text-white">
              {dayjs(item.durationms).format("mm:ss")}
            </div>
          </Link>
          <div className="content p-2 flex-1">
            <div className="title ui_ellipse">
              <Link
                title={item.title}
                to={`/player/${playerTypes[item.type]}/${item.vid}`}
                className="ui_text_black_hover"
              >
                {item.type === 0 && <TagMV className="inline-block" />}
                {item.title}
              </Link>
            </div>
            <div className="username mt-2 truncate text-gray-400">
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
