import React, { memo, createElement, FC } from "react";
import { apis, ConfigName, elements } from "./config";
import { Navigate, useParams } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import useInit from "./useInit";
import Loading from "@/components/Loading";
import Template from "./Template";

const SubList = () => {
  const { path = "" } = useParams();
  if (!(path in elements)) {
    return <Navigate to={""} replace={true} />;
  }
  const api = apis[path];
  const { data, isLoading } = api();
  const count = data?.count || 0;
  const { search, setSearch, list } = useInit(data?.data);

  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <HeaderBar search={search} setSearch={setSearch} count={count} />
      <Template search={search} list={list} setSearch={setSearch} count={count}>
        {createElement(elements[path as ConfigName], { list })}
      </Template>
    </>
  );
};

export default memo(SubList);
