import React, { createElement, memo, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  setSearchCount,
  setSearchValue,
} from "@/modules/reducers/search/slice";
import "./style.scss";
import Loading from "@/components/Loading";
import Page from "@/components/Page";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { useGetCloudSearchQuery } from "@/modules/services/search";
import config from "./config";

const Search = () => {
  console.log("entry search");
  const { keywords = "", type = "" } = useParams();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { code, unit, limit, Dom, countName } = config[type];

  const { searchValue } = useAppSelector(({ common }) => common);
  const { data, isLoading } = useGetCloudSearchQuery({
    keywords,
    limit,
    type: code,
    offset: (page - 1) * limit,
  });

  const result = data?.result || {};
  const count = result[countName];
  useEffect(() => {
    dispatch(setSearchCount({ count }));
  }, [count]);
  useEffect(() => {
    if (!searchValue) {
      dispatch(
        setSearchValue({
          searchValue: keywords,
        })
      );
    }
  }, []);

  // useEffect(() => {
  //   return () => setPage(1);
  // }, [keywords, type]);
  if (isLoading) {
    return (
      <div className="pt-48 flex-center">
        <Loading />
      </div>
    );
  }
  return createElement(Dom, result);
};

export default memo(Search);
