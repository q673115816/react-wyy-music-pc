import { Outlet, useParams } from "react-router-dom";
import React, { memo, useEffect } from "react";
import { useLocalStorage } from "react-use";

const Layout = () => {
  const { keywords = "" } = useParams();
  const [searchHistory, setSearchHistory, removeSearchHistory] =
    useLocalStorage("searchHistory", []);
  useEffect(() => {
    const otherSearchHistory =
      searchHistory?.filter((otherKeywords) => otherKeywords !== keywords) ||
      [];
    setSearchHistory([keywords, ...otherSearchHistory]);
  }, [keywords]);
  return <Outlet />;
};

export default memo(Layout);
