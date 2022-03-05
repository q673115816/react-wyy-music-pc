import { useEffect, useState } from "react";

const useInit = ({ data, isLoading }, rule) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(data?.data || []);
  const count = data?.count || 0;

  useEffect(() => {
    setFilter(data.data);
  }, [isLoading]);

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
