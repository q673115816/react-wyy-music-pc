import React, { memo, FormEventHandler, ChangeEventHandler } from "react";
import { IconSearch } from "@tabler/icons-react";

import { useNavigate } from "react-router";
import { useMaskStore, useSearchStore } from "@/stores";

const Search = () => {
  const navigate = useNavigate();
  const { searchVisibility } = useMaskStore();
  const { keywords } = useSearchStore();
  const handleSearchInit = async () => {
    useMaskStore.getState().setSearchShow();
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const keywords = e.target.value;
    useSearchStore.getState().setKeywords({ keywords });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (keywords) {
      navigate(`/search/${keywords}`);
      useMaskStore.getState().setDialogReset(); // temp
    }
    return false;
  };

  return (
    <form
      className="relative"
      style={{ zIndex: searchVisibility ? 99 : "initial" }}
      onSubmit={handleSubmit}
    >
      <IconSearch
        size={16}
        className="absolute inset-y-0 m-auto left-3 text-white"
      />
      <input
        type="text"
        placeholder="搜索"
        className="h-7 w-40 pl-9 placeholder-white/40 rounded-full bg-black/5 text-white"
        value={keywords}
        onChange={handleSearchChange}
        onFocus={handleSearchInit}
      />
    </form>
  );
};

export default memo(Search);
