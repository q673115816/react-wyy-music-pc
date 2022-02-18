import { apis, rules } from "./config";
import { useEffect, useState } from "react";

const useInit = (path: string) => {
  path = decodeURIComponent(path);
  const { data = {}, isLoading } = apis?.[path]?.();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const count = data?.count || 0;
  useEffect(() => {
    const filter = data?.data || [];
    if (search.trim()) {
      setFilter(rules[path](filter));
    } else {
      setFilter(filter);
    }
  }, [data, search]);
  return {
    isLoading,
    count,
    search,
    setSearch,
    filter,
  };
};

export default useInit;
