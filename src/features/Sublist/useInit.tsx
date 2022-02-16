import { useState, useEffect } from "react";

export default (data = [], filterRule) => {
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const handleFilter = () => {
    if (search.trim()) {
      // setFilter(filterRule(data, search));
      setFilter(data);
    } else {
      setSearch("");
      setFilter(data);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [data, search]);

  return {
    setSearch,
    search,
    list: filter,
  };
};
