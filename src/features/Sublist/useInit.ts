import { useEffect, useState } from "react";

const useInit = (data, rule) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(data?.data || []);
  const count = data?.count || 0;

  useEffect(() => {
    const filter = data?.data || [];
    if (search.trim()) {
      setFilter(rule(filter, search));
    } else {
      setFilter(filter);
    }
  }, [search]);
  return {
    count,
    search,
    setSearch,
    filter,
  };
};

export default useInit;
