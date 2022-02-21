import { IconPencil, IconShare } from "@tabler/icons";
import React, { memo } from "react";
import { useGetTopicDetailQuery } from "@/modules/services/friend";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTopicDetailQuery({
    actid: id as string,
  });
  const act = data?.act || {};
  if (isLoading) return null;
  return (
    <div className="border-b">
      <div className="rounded overflow-hidden border relative">
        <img
          src={act.coverPCUrl}
          loading={"lazy"}
          className={`h-56 object-cover block`}
          alt=""
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex-center flex-col`}
        >
          <div
            style={{ minWidth: 210 }}
            className="relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col "
          >
            <div className={`flex`}>
              #<span className="truncate">{act.title}</span>#
            </div>
            <span className="absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2">
              {`${act.participateCount}人参与`}
            </span>
          </div>
          <button
            type="button"
            className="bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100"
          >
            <IconPencil size={16} />
            立即参与
          </button>
        </div>
        <button
          type="button"
          className="absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"
        >
          <IconShare size={24} stroke={1} />
        </button>
      </div>
      <ul className="pb-8 text-sm text-gray-500 leading-6">
        {act.text?.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Detail);
