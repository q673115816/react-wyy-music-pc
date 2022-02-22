import React, { memo, FormEventHandler, ChangeEventHandler } from "react";
import { IconSearch } from "@tabler/icons";
import { searchSelector, setKeywords } from "@/modules/reducers/search/slice";
import { setSearchShow, setDialogReset } from "@/modules/reducers/mask/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { keywords } = useAppSelector(searchSelector);
  const handleSearchInit = async () => {
    dispatch(setSearchShow());
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const keywords = e.target.value;
    dispatch(setKeywords({ keywords }));
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (keywords) {
      navigate(`/search/${keywords}`);
      dispatch(setDialogReset()); // temp
    }
    return false;
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <IconSearch
        size={16}
        className="absolute inset-y-0 m-auto left-3 text-white"
      />
      <input
        type="text"
        placeholder="搜索"
        className="h-7 w-40 pl-9 placeholder-white placeholder-opacity-40 rounded-full bg-black bg-opacity-5 text-white"
        value={keywords}
        onChange={handleSearchChange}
        onFocus={handleSearchInit}
      />
    </form>
  );
};

export default memo(Search);
