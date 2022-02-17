import React, {createElement, memo, useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import HeaderBar from "@/features/Sublist/components/HeaderBar";
import Empty from "@/features/Sublist/components/Empty";
import { apis, elements } from "@/features/Sublist/config";

const SubList = () => {
  const { path = "" } = useParams();
  const { data, isLoading } = useCallback(apis[path], [path])();
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const count = data?.count || 0;

  const handleFilter = () => {
    const filter = data?.data || [];
    if (search.trim()) {
      // setFilter(filterRule(data, search));
      setFilter(filter);
    } else {
      setSearch("");
      setFilter(filter);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [data, search]);

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
      {filter.length ? (
        createElement(elements[path], { filter })
      ) : (
        <Empty count={count} search={search} path={path} />
      )}
    </>
  );
};

export default memo(SubList);
