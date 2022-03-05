import CommentsList from "@/components/Comments/CommentsList";
import Page from "@/components/Page/Page";
import { commentLimit } from "@/common/config";
import React, { FC, memo, useState } from "react";
import config from "./config";
import Loading from "@/components/Loading";

interface iProps {
  type: string;
  vid: string;
}

const Comment: FC<iProps> = ({ type, vid }) => {
  const [page, setPage] = useState(1);
  const { apiComments } = config[type];
  const { data, isLoading } = apiComments({
    id: vid,
    limit: commentLimit,
    offset: (page - 1) * commentLimit,
  });
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <CommentsList comments={data} />
      <Page
        total={Math.ceil(data.total / commentLimit)}
        page={page}
        func={setPage}
      />
    </>
  );
};

export default memo(Comment);
