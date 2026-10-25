import React, { createElement, memo, useEffect, useState } from "react";
import { useParams } from "react-router";

import "./style.scss";
import Loading from "@/components/Loading";
import Page from "@/components/Page";
import { useGetCloudSearchMutation } from "@/modules/services/search";
import config, { Types } from "./config";
import { useMaskStore, useSearchStore } from "@/stores";

const Search = () => {
  console.log("entry search");
  const { keywords = "", type = "" } = useParams();
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({});
  const [count, setCount] = useState(0);
  const { code, limit, Node, countName } = config[type as Types];

  const { keywords: searchValue } = useSearchStore();
  const [cloudSearchGet, { isLoading }] = useGetCloudSearchMutation();

  useEffect(() => {
    useSearchStore.getState().setSearchCount({ count });
  }, [count]);

  useEffect(() => {
    if (!searchValue) {
      useSearchStore.getState().setKeywords({
          keywords,
        })
      ;
    }
  }, [keywords]);

  const handleInit = async (page: number) => {
    const data = await cloudSearchGet({
      keywords,
      limit,
      type: code,
      offset: (page - 1) * limit,
    });
    const result = data?.data?.result || {};
    setResult(result);
    setCount(result[countName]);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    handleInit(page);
  };

  useEffect(() => {
    useMaskStore.getState().setDialogReset();
    handleChangePage(1);
  }, [keywords, type]);
  if (isLoading) {
    return (
      <div className="pt-48 flex-center">
        <Loading />
      </div>
    );
  }
  return (
    <>
      {createElement(Node, result)}
      <Page
        total={Math.ceil(count / limit)}
        page={page}
        func={handleChangePage}
      />
    </>
  );
};

export default memo(Search);
