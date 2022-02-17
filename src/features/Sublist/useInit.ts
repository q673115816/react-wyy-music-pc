import { useEffect, useState } from "react";

const useInit = (api) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const res = api();
  const count = res.data?.count || 0;

  const handleFilter = () => {
    const filter = res.data?.data || [];
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
  }, [res, search]);

  return {
    ...res,
    search,
    setSearch,
    filter,
    count,
  };
};

export default useInit;
